from flask import Flask, request, jsonify, render_template, json
from flask_cors import CORS, cross_origin

import pymongo
import os

from pymongo import MongoClient
from flask_pymongo import PyMongo
from flask_bcrypt import Bcrypt
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

app.config["JWT_SECRET_KEY"] = os.environ.get('JWT_SECRET')  # getting JWT_SECRET key from .env file
jwt = JWTManager(app)
bcrypt = Bcrypt(app)

# Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.
# @app.route("/token", methods=["GET", "POST"])
# def tokenCreation():
#     # username = request.json.get("username", None)
#     username = request.get_json("username")
#     # password = request.json.get("password", None)
#     password = request.get_json("password")
#     #if username != "test" or password != "test":
#     if username != db.users.find({username: "username"}) and password != db.users.find({password: "password"}):
#         return jsonify({"msg": "Bad username or password"}), 401
    
#     access_token = create_access_token(identity=username)
#     return jsonify(access_token=access_token)

# @app.route("/token", methods=['GET', 'POST'])
# def tokenCreation():
#     username = request.json.get("username", None)
#     password = request.json.get("password", None)
#     if username != db.users.find({username: "username"}) and password != db.users.find({password: "password"}):
#         return jsonify({"msg": "Bad username or password"}), 401

#     access_token = create_access_token(identity=username)
#     return jsonify(access_token=access_token)

# @app.route("/token", methods=['GET', 'POST'])
# def tokenCreation():
#     if request.method == 'POST':
#         username = request.json.get("username")
#         password = request.json.get("password")

#         dbChecker = db.users.find_one({"username": username})
#         if dbChecker:
#             username_val = dbChecker['username']
#             passwd_val = dbChecker['password']

#     return render_template('admLogin.html')



## TO LOGIN
@app.route('/token', methods=['POST'])
def login():
    users = mongo.db.users 
    username = request.get_json()['username']
    password = request.get_json()['password']
    result = ""

    response = users.find_one({'username': username})

    if response:
        if bcrypt.check_password_hash(response['password'], password):
            access_token = create_access_token(identity = {
                'username': response['username']
            })
            result = jsonify({'token':access_token})
        else:
            result = jsonify({"error":"Invalid username and password"})
    else:
        result = jsonify({"result":"No results found"})
    return result 



# from app.routes import home, users, react_test
from app.routes import home, users, react_test, rankings, game, map, move, createMap, storeRanking
