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

    def test_map(self):
        client = app.test_client(self)
        url = '/api/map'

        chid = 1

        payload = {
            "challenge": chid 
        }

        rankID = 0
        expected_res = {}

        _challenge = mongo.db.Challenges.find({"challenge":chid})
        for doc in _challenge:
            # print(doc)
            expected_res["challenge"] = doc["challenge"]
            expected_res["name"] = doc["name"]
            expected_res["difficulty"] = doc["difficulty"]
            expected_res["tiles"] = doc["tiles"]
        
        response = client.post(url, json=payload)

        print("\nTesting test_map()")
        print("POST /api/map")
        print("Payload : " + json.dumps(payload))
        print("\nExpected Response : " + json.dumps(expected_res))
        print("Response : " + json.dumps(response.get_json()))

        self.assertEqual(response.get_json(), expected_res)

if __name__ == "__main__":
    unittest.main()