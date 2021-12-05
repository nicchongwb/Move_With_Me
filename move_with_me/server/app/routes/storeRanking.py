'''
Ranking Controller + Ranking Entity
This api endpoint will receive requests from React and respond accordingly
'''

from app import app, mongo
from flask import jsonify, redirect, url_for, request
from flask_cors import cross_origin
import json

# MOVE API function
@app.route("/api/storeRanking", methods=["POST"])
@cross_origin()
def storeRanking():
    json_data = request.json
    mongoPayload = {} # Payload for api response
    print(json_data)

    # Get document with largest 'ranking ID' and +1
    _maxRankIDDocument = mongo.db.Rankings.find().sort("id",-1).limit(1)
    for doc in _maxRankIDDocument:
        mongoPayload["id"] = doc["id"] + 1    
    mongoPayload["name"] = json_data["name"]
    mongoPayload["score"] = json_data["score"]
    mongoPayload["challenge"] = json_data["challengeID"]
    print(mongoPayload)

    try:
        _insert = mongo.db.Rankings.insert(mongoPayload)
    except:
        print("Mongo insert went wrong...")

    response = { 
        "toRedirect":True,
        "rankingID":mongoPayload["id"]
    }

    return jsonify(response)