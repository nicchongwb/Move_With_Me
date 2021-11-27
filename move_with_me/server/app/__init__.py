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

@app.route("/challenges",methods=[ 'GET'])
def retrieve_challenge():
    challenges = []
    x =  db.map.find()
    for data in x:
        data['_id'] = str(data['_id']) # This does the trick!
        challenges.append(data)
        return jsonify(challenges)

from app.routes import home, users, react_test