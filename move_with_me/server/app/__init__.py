from flask import Flask
import pymongo
from pymongo import MongoClient
from flask_pymongo import PyMongo

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/mvm_db"
mongo = PyMongo(app)

from app.routes import home, users, react_test