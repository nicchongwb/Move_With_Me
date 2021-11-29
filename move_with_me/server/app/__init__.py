from flask import Flask, request, jsonify
from flask_cors import CORS
import pymongo
from pymongo import MongoClient

from flask_pymongo import PyMongo

app = Flask(__name__)
CORS(app)
app.config["MONGO_URI"] = "mongodb+srv://admin:ICT2x01isgreat@cluster0.ciqn1.mongodb.net/mvm_db?retryWrites=true&w=majority"
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