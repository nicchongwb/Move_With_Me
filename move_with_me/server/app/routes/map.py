'''
Game Controller + Game Entity
This api endpoint will receive requests from React and respond accordingly
'''

from app import app, mongo
from flask import jsonify, redirect, url_for, request
from flask_cors import cross_origin
import json

@app.route("/api/map", methods=["POST", "GET"])
@cross_origin()
def getMap():
    json_data = request.json
    print("TESTING")
    print(json_data["challenge"])
    chid = json_data["challenge"]
    
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

