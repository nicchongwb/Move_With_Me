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
    # mongo.db.Rankings.insert(json_data)
    json_data["status"] = "completed"
    return jsonify(json_data)