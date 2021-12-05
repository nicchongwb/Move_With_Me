from flask import Flask, request, jsonify, render_template
from flask_cors import CORS, cross_origin
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

@app.route("/saveCommands", methods=['GET', 'POST'])
def car_commands():
    commandTray = request.get_json()
    print('commands',commandTray)
    if commandTray:
        for x in commandTray: 
            db.commandTray.insert_one({'movement': x})
            print('Successful')    
    return 'Success'
  

@app.route("/retrieveCommands", methods=['GET'])
def retrieve_car_commands():
    commands = []
    x =  db.commandTray.find()
    for data in x:
        data['_id'] = str(data['_id']) 
        commands.append(data)
    return jsonify(commands)

@app.route("/saveUsers",methods=['GET', 'POST'])
def save_player_names():
    player_name = request.get_json()
    print('i am player name',player_name)
    if player_name:
        db.users.insert_one({'playerName': player_name})
        print('Successful')
    return 'Success'
    
@app.route("/usersList",methods=['GET'])
def users_list():
    usernames = []
    x =  db.users.find()
    for data in x:
        data['_id'] = str(data['_id']) 
        usernames.append(data)
    return jsonify(usernames)

        
@app.route("/challenges",methods=[ 'GET'])
def retrieve_challenge():
    challenges = []
    x =  db.map.find()
    for data in x:
        data['_id'] = str(data['_id']) 
        challenges.append(data)
    return jsonify(challenges)

    # Select Challenge route
@app.route("/selectchallenge", methods=["GET"])
def displayChallengeList():
    return render_template()

from app.routes import home, users, react_test, rankings, game, map, move