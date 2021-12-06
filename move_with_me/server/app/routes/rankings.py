from app import app, mongo
from flask import jsonify, redirect, url_for, request
from flask_cors import cross_origin
import json

# MOVE API function
@app.route("/api/rankings", methods=["POST"])
@cross_origin()
def displayRankings():
    # db.Rankings.aggregate({$group:{_id:"$name","count":{"$sum":"$score"}}},{$sort:{"count":-1}})
    # db.Rankings.aggregate({$group:{_id:"$name","count":{"$sum":"$score"}}},{$sort:{"count":-1}},{$limit:3})
    # Fetch top 3 totalScorers from Rankings
    pipeline = [{"$group":{"_id":"$name","count":{"$sum":"$score"}}},{"$sort":{"count":-1}},{"$limit":3}]
    _hallOfFame = mongo.db.Rankings.aggregate(pipeline)
    hallOfFameArr = []
    
    counter = 1

    for doc in _hallOfFame:
        record = {}
        record["rank"] = counter
        record["playerName"] = doc["_id"]
        record["score"] = doc["count"]
        hallOfFameArr.append(record)
        counter += 1
    print(hallOfFameArr)

    response = {"rankingData" : hallOfFameArr}

    return jsonify(response)
