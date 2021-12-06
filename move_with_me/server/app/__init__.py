from flask import Flask, request, jsonify, render_template
from flask_cors import CORS, cross_origin
import pymongo
from pymongo import MongoClient
from flask_pymongo import PyMongo

from flask_jwt_extended import create_access_token
from flask_jwt_extended import JWTManager
import os

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
    # print('i am player name',type(player_name))
    # print('i am player name',len(player_name))
    if player_name:
        if(len(player_name)<=15):
            db.users.insert_one({'playerName': player_name})
            print('Successful')
    else: 
        print('Not successful')

    usernames = []
    x =  db.users.find()
    for data in x:
        data['_id'] = str(data['_id']) 
        usernames.append(data)
    return jsonify(usernames)
    
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
    x =  db.Challenges.find()
    for data in x:
        data['_id'] = str(data['_id']) 
        challenges.append(data)
    return jsonify(challenges)

app.config["JWT_SECRET_KEY"] = os.environ.get('JWT_SECRET')  # getting JWT_SECRET key from .env file
jwt = JWTManager(app)

## TO LOGIN
@app.route('/token', methods=['GET','POST'])
def login():
    x =  db.admin.find()
    for data in x:
        data['_id'] = str(data['_id']) 
        data['username'] = str(data['username']) 
        if(str(data['username']) == 'admin'):
            data['access_token'] = create_access_token(identity={
                'username': data['username']
            }) 
            print(data)
            # return jsonify(a=data,access_token=access_token)
            return(data)

from app.routes import home, users, react_test, rankings, game, map, move, createMap, storeRanking, challengeResult
