try:
    from run import app
    import unittest, json, pymongo
    from pymongo import MongoClient
    from flask_pymongo import PyMongo
    from flask import jsonify

except Exception as e:
    print(f"Some Modules are Missing {e}")

app.config["MONGO_URI"] = "mongodb://localhost:27017/mvm_db"
mongo = PyMongo(app)
db = mongo.db

class FlaskTest(unittest.TestCase):

    def test_challenge_success(self):
        client = app.test_client(self)
        url = '/challenges'
        returnArr = []

        # Get expected rankID
        _mongoQuery = mongo.db.Challenges.find()
        for doc in _mongoQuery:
            doc['_id'] = str(doc['_id'])
            doc.pop("tiles")
            returnArr.append(doc)
        
        response = client.get(url)
        expected_res = returnArr

        print("\nTesting test_challenge_success()")
        print("POST challenges")
        print("Payload : " + "NULL")
        print("\nExpected Response : " + json.dumps(expected_res))
        print("Response : " + json.dumps(response.get_json()))
        self.assertEqual(json.dumps(response.get_json()), expected_res)

if __name__ == "__main__":
    unittest.main()