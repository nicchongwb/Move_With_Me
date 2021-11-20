@app.route("/setPlayerName", methods ['POST'])
def save_player_names():
    if request_method =='POST':
        player_id = request.json
        if player_id: 
            data = 
    # _users = mongo.db.Users.find()
    # users = [{"id": user["id"], "username": user["username"], "password": user["password"]} for user in _users]
    # return jsonify({"users":users})