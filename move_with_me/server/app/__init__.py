from flask import Flask, request, jsonify
from flask_cors import CORS


import pymongo
from pymongo import MongoClient
from flask_pymongo import PyMongo

app = Flask(__name__)
CORS(app)

app.config["MONGO_URI"] = "mongodb://localhost:27017/mvm_db"
mongo = PyMongo(app)
db = mongo.db


@app.route("/helloesp", methods=['GET'])
def helloHandler():
    if request.method == 'GET':
        return 'Hello EcSP8266'

@app.route("/saveUsers",methods=['POST', 'GET'])
def save_player_names():
        player_name = request.get_json()
        print('i am player name',player_name)
        if player_name:
            db.users.insert_one({'playerName': player_name})
            return 'Success'

        return 'Unsuccessful!'

from app.routes import home, users, react_test