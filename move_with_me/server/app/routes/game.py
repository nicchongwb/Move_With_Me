'''
Game Controller + Game Entity
This api endpoint will receive requests from React and respond accordingly
'''

from app import app, mongo
from flask import jsonify, redirect, url_for, request
import json

@app.route("/api/game", methods=["POST"])
def updateGame():
    json_data = request.json
    
    # json_data["position"][0]
    json_data["status"] = "completed"
    # mongo.db.Rankings.insert(json_data)
    return jsonify(json_data)
