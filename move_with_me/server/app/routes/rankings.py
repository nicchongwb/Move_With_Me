from app import app, mongo
from flask import jsonify, request

@app.route("/rankings", methods=['GET'])
def displayRankings():
    data = request.json
    return jsonify
    # _rankings = mongo.db.Rankings.find().sort("score",1)
    # rankings = [{"name": ranking["name"], "challenge": ranking["challenge"], "score":ranking["score"]} for ranking in _rankings]
    # return jsonify({"rankings":rankings})