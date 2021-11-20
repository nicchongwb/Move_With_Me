from flask import Flask, request

import pymongo
from pymongo import MongoClient
from flask_pymongo import PyMongo

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/mvm_db"
mongo = PyMongo(app)


@app.route("/helloesp", methods=['GET'])
def helloHandler():
    if request.method == 'GET':
        return 'Hello EcSP8266'

@app.route("/saveUsers", methods=['POST'])
def save_player_names():
    if request.method == 'GET':
        return 

from app.routes import home, users, react_test