from flask import Flask, jsonify
from flask.templating import render_template
import pymongo
from pymongo import MongoClient
from flask_pymongo import PyMongo
# from bson.json_util import dumps
# from bson.objectid import ObjectID

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/mvm_db"
mongo = PyMongo(app)

# Main index route
@app.route("/")
def home():
    return "This is home() output from @app.route"

@app.route("/users")
def get_stored_users():
    _users = mongo.db.users.find()
    users = [{"id": user["id"], "username": user["username"], "password": user["password"]} for user in _users]
    return jsonify({"users":users})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)