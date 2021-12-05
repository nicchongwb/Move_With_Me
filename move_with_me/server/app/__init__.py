from flask import Flask, request, jsonify
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
        # print('data',data)
        data['_id'] = str(data['_id']) 
        print(str(data['movement']) )
        commands.append(str(data['movement']))
        # commands.append(data)
    #removal 
    print(commands)
    command = 0
    if len(commands) > 0:
        if commands[0] == 'left':
            command = 1
        elif commands[0] == 'right':
            command = 2
        elif commands[0] == 'up':
            command = 3
        elif commands[0] == 'down':
            command = 4
        db.commandTray.remove({'movement': commands.pop(0)})
        print(commands)

    return f'{command}\0'
    # return jsonify(commands)

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





from app.routes import home, users, react_test, rankings, game, map, move, createMap
