'''
Challenge Ranking Controller + Challenge Ranking Entity
This api endpoint will receive requests from React and respond accordingly
'''

from app import app, mongo
from flask import jsonify, redirect, url_for, request
from flask_cors import cross_origin
import json

# MOVE API function
@app.route("/api/challengeResult", methods=["POST"])
@cross_origin()
def challengeResult():
    json_data = request.json
    print(json_data)

    # Fetch user rankID row
    rankingID = json_data["rankID"]
    _userRankDocument = mongo.db.Rankings.find({"id":rankingID})
    userRankDoc = {}
    chID = 0
    chName = ''

    for doc in _userRankDocument:
        userRankDoc["id"] = doc["id"]
        userRankDoc["name"] = doc["name"]
        userRankDoc["score"] = doc["score"]
        userRankDoc["challenge"] = doc["challenge"]
        chID = doc["challenge"] # Get challenge ID before querying top n scorers

    print(userRankDoc)
    print(chID)

    # Get challenge Name and append to userRankDoc subsequently topThreeRankDocArr
    _challengeName = mongo.db.Challenges.find({"challenge":chID}).limit(1)
    for doc in _challengeName:
        chName = doc["name"] # Get challengeName  

    print(chName)

    # Fetch top 3 scorers of the challenge
    _topThreeRankDocs = mongo.db.Rankings.find({"challenge":chID}).sort("score",-1).limit(3)
    topThreeRankDocArr = []
    for doc in _topThreeRankDocs:
        topThreeRankDocArr.append(doc)
    print(topThreeRankDocArr)

    # Clean up topThreeRankDocArr to remove "_id" key
    for element in topThreeRankDocArr:
        element.pop("_id")

    # Prepare return mongo records for API response
    returnRecords = topThreeRankDocArr
    # Check if userRank is in top 3
    if userRankDoc not in topThreeRankDocArr:
        returnRecords.append(userRankDoc)
    print(returnRecords)

    # Add challengeName key/value into returnRecords list
    for record in returnRecords:
        record["challengeName"] = chName

    response = { 
        "rankingData":returnRecords
    }
    print(response)

    return jsonify(response)