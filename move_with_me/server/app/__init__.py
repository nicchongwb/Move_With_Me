from flask import Flask, request, jsonify

import pymongo
from pymongo import MongoClient
from flask_pymongo import PyMongo

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/mvm_db"
mongo = PyMongo(app)
db = mongo.db


@app.route("/helloesp", methods=['GET'])
def helloHandler():
    if request.method == 'GET':
        return 'Hello EcSP8266'

@app.route("/saveUsers")
def save_player_names():
    name = request.jsonify
    console.log(name)
        db.users.insert_one({'playerName': name})
        return jsonify(message="success")

from app.routes import home, users, react_test