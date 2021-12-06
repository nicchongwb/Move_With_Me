try:
    from run import app
    import unittest, json, pymongo
    from pymongo import MongoClient
    from flask_pymongo import PyMongo

except Exception as e:
    print(f"Some Modules are Missing {e}")

app.config["MONGO_URI"] = "mongodb://localhost:27017/mvm_db"
mongo = PyMongo(app)
db = mongo.db

class FlaskTest(unittest.TestCase):

    def test_ranking_success(self):
        client = app.test_client(self)
        url = '/api/rankings'

        # Get expected rankID
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


        response = client.post(url)
        expected_res = {"rankingData" : hallOfFameArr}

        print("\nTesting test_ranking_success()")
        print("POST /api/rankings")
        print("Payload : " + "NULL")
        print("\nExpected Response : " + json.dumps(expected_res))
        print("Response : " + json.dumps(response.get_json()))

        self.assertEqual(response.get_json(), expected_res)

if __name__ == "__main__":
    unittest.main()