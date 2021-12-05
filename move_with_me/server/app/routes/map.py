'''
Game Controller + Game Entity
This api endpoint will receive requests from React and respond accordingly
'''

from app import app, mongo
from flask import jsonify, redirect, url_for, request
import json

@app.route("/api/map", methods=["GET", "POST"])
@cross_origin()
def getMap():
    chid = 1 # ChallengeID, placeholder to get from react api call
    json_data = request.json
    print(json_data)

    jsonPayload = {}

    _challenge = mongo.db.Challenges.find({"challenge":chid})
    for doc in _challenge:
        # print(doc)
        jsonPayload["challenge"] = doc["challenge"]
        jsonPayload["name"] = doc["name"]
        jsonPayload["difficulty"] = doc["difficulty"]
        jsonPayload["tiles"] = doc["tiles"]
    # return "test"
    return jsonify(jsonPayload)

