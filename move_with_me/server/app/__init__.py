from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin

import pymongo
import os
from pymongo import MongoClient
from flask_pymongo import PyMongo
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager

app = Flask(__name__)
CORS(app)

app.config["MONGO_URI"] = "mongodb://localhost:27017/mvm_db"
mongo = PyMongo(app)
db = mongo.db


@app.route("/helloesp", methods=['GET'])
def helloHandler():
    if request.method == 'GET':
        return 'Hello EcSP8266'

@app.route("/saveUsers",methods=['GET', 'POST'])
def save_player_names():
    player_name = request.get_json()
    print('i am player name',player_name)
    if player_name:
        db.users.insert_one({'playerName': player_name})
        return 'Successful'
    else:
        return 'Unsuccessful'
        
@app.route("/challenges",methods=[ 'GET'])
def retrieve_challenge():
    challenges = []
    x =  db.map.find()
    for data in x:
        data['_id'] = str(data['_id']) 
        challenges.append(data)
        return jsonify(challenges)

app.config["JWT_SECRET_KEY"] = os.environ.get('JWT_SECRET')  # getting JWT_SECRET key from .env file
jwt = JWTManager(app)

# Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.
@app.route("/token", methods=["POST"])
def tokenCreation():
    username = request.json.get("username", None)
    password = request.json.get("password", None)
    if username != "test" or password != "test":
        return jsonify({"msg": "Bad username or password"}), 401

    access_token = create_access_token(identity=username)
    return jsonify(access_token=access_token)

from app.routes import home, users, react_test