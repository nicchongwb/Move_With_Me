'''
Game Controller + Game Entity
This api endpoint will receive requests from React and respond accordingly
'''

from app import app, mongo
from flask import jsonify, redirect, url_for, request
from flask_cors import cross_origin
import json

# Check if out of bound
def isOutOfBound(newPos):
    result = False
    if newPos[0] < 0 or newPos[0] > 9:
        result = True
    if newPos[1] < 0 or newPos[1] > 9:
        result = True
    return result

# Check if newPos is in challengeTile and updateScore accordingly
def updateScore(newPos, challengeTiles, score):
    if newPos in challengeTiles:
        return addScore(score, 1)
    else:
        return addScore(score, -1)


# Add score, lower bound score to 0
def addScore(score, operand):
    score += operand
    if score < 0:
        return 0
    else:
        return score

# Check if curPos is win condition == [9,9]
def isCompleted(curPos):
    if curPos == [9,9]:
        return True
    else:
        return False

# Set challenge status
def setChStatus(chStatus):
    print('Challenge completed')
    print(chStatus)
    return chStatus

# MOVE API function
@app.route("/api/move", methods=["POST"])
@cross_origin()
def move():
    json_data = request.json
    
    # Get challenge data from database
    _challenge = mongo.db.Challenges.find({"challenge":json_data["challengeID"]})
    challengeTiles = []
    for doc in _challenge:
        challengeTiles = doc["tiles"]
    # print(challengeTiles)

    # Set challenge Status
    chStatus = json_data["chStatus"]

    # Set score for computation
    score = json_data["score"]

    # Set up current position for computation
    curPos = [json_data["position"]['x'], json_data["position"]['y']]

    for cmd in json_data["commands"]:
        # Always check if curPos is already at end tile of challenge [9,9]
        if isCompleted(curPos):
            chStatus = setChStatus('Completed')
            print(curPos)
            break # Break out of iteration
        else:
            # IF LEFT
            if cmd == 'left':
                newPos = [curPos[0]-1, curPos[1]]
                if isOutOfBound(newPos):
                    print('OUT OF BOUND')
                    score = addScore(score, -1)
                else:
                    print('NOT OUT OF BOUND')
                    score = updateScore(newPos, challengeTiles, score)
                    curPos = newPos # Update curPos
            # IF RIGHT
            elif cmd == 'right':
                newPos = [curPos[0]+1, curPos[1]]
                if isOutOfBound(newPos):
                    print('OUT OF BOUND')
                    score = addScore(score, -1)
                else:
                    print('NOT OUT OF BOUND')
                    score = updateScore(newPos, challengeTiles, score)
                    curPos = newPos # Update curPos
            # IF UP
            elif cmd == 'up':
                newPos = [curPos[0], curPos[1]+1]
                if isOutOfBound(newPos):
                    print('OUT OF BOUND')
                    score = addScore(score, -1)
                else:
                    print('NOT OUT OF BOUND')
                    score = updateScore(newPos, challengeTiles, score)
                    curPos = newPos # Update curPos
            # IF DOWN
            elif cmd == 'down':
                newPos = [curPos[0], curPos[1]-1]
                if isOutOfBound(newPos):
                    print('OUT OF BOUND')
                    score = addScore(score, -1)
                else:
                    print('NOT OUT OF BOUND')
                    score = updateScore(newPos, challengeTiles, score)
                    curPos = newPos # Update curPos
            # Check if win
            if isCompleted(curPos):
                chStatus = setChStatus('Completed')
                print(curPos)
                break # Break out of iteration
            print(curPos)
            print('Challenge not completed')
        print(score)

    # Update json data to respond to React
    json_data["position"] = {'x':curPos[0], 'y':curPos[1]}
    json_data["score"] = score
    json_data["chStatus"] = chStatus

    return jsonify(json_data)
