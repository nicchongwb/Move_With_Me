from flask import Flask, jsonify
import pymongo
from pymongo import MongoClient

app = Flask(__name__)

# Method to get database instance
def get_db():
    client = MongoClient(host='mvm_mongodb',
                         port=27017, 
                         username='root', 
                         password='pass',
                        authSource="admin")
    db = client["user_db"] # specifiy which database we want to select
    return db

# Main index route
@app.route("/")
def home():
    return "This is home() output from @app.route"

# Test route to query the databse
@app.route('/users')
def get_stored_users():
    db=""
    try:
        db = get_db()
        _users = db.user_tb.find() # Query mongodb and fetch table inside user_db
    # Fetch rows and format them into a list of json objects
        users = [{"id": user["id"], "username": user["username"], "password": user["password"]} for user in _users]
        # Return data queried from database
        return jsonify({"users": users})
    except:
        pass
    finally:
        if type(db)==MongoClient:
            db.close()

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)