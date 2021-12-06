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

    def test_storeRanking_success(self):
        client = app.test_client(self)
        url = '/api/storeRanking'

        payload = {
            "name":"Test III",
            "score":99,
            "challengeID":1
        }

        rankID = 0
        # Get expected rankID
        _mongoQuery = mongo.db.Rankings.find().sort("id",-1).limit(1)
        for doc in _mongoQuery:
            rankID = doc["id"] + 1 
        
        response = client.post(url, json=payload)
        expected_res = {"toRedirect":True, "rankingID":rankID}

        print("\nTesting test_storeRanking_success()")
        print("POST /api/storeRanking")
        print("Payload : " + json.dumps(payload))
        print("\nExpected Response : " + json.dumps(expected_res))
        print("Response : " + json.dumps(response.get_json()))

        self.assertEqual(response.get_json(), expected_res)

if __name__ == "__main__":
    unittest.main()