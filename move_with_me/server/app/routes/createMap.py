'''
Challenge Controller + Challenge Entity
This api endpoint will receive requests from React and respond accordingly
'''

from app import app, mongo
from flask import jsonify, redirect, url_for, request
from flask_cors import cross_origin
import json

# MOVE API function
@app.route("/api/createChallenge", methods=["POST"])
@cross_origin()
def createMap():
    json_data = request.json
    mongoPayload = {} # Payload for api response

    # print(json_data["name"])
    # print(json_data["difficulty"])
    # print(json_data["selTile"])

    # Get document with largest 'challengeID' and +1 => assign to chID
    _maxChIDDocument = mongo.db.Challenges.find().sort("challenge",-1).limit(1)
    for doc in _maxChIDDocument:
        mongoPayload["challenge"] = doc["challenge"] + 1
    mongoPayload["name"] = json_data["name"]
    mongoPayload["difficulty"] = json_data["difficulty"]
    mongoPayload["tiles"] = json_data["selTile"]
    # print(mongoPayload)

    try:
        _insert = mongo.db.Challenges.insert(mongoPayload)
    except:
        print("Mongo createMap insert went wrong...")

    respond = {"isSubmitted":True} # Respond back to frontend that submitted is successful

    return jsonify(respond)
