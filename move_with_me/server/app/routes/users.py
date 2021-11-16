from app import app, mongo
from flask import jsonify

@app.route("/users")
def get_stored_users():
    _users = mongo.db.Users.find()
    users = [{"id": user["id"], "username": user["username"], "password": user["password"]} for user in _users]
    return jsonify({"users":users})