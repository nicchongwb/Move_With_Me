'''
Challenge Controller + Challenge Entity
This api endpoint will receive requests from React and respond accordingly
'''

from app import app, mongo
from flask import jsonify, redirect, url_for, request
from flask_cors import cross_origin
import json

# MOVE API function
@app.route("/api/createMap", methods=["POST"])
@cross_origin()
def createMap():
    json_data = request.json
    print(json_data["selTile"])
    
    # json_data["chStatus"] = chStatus

    return jsonify(json_data)
