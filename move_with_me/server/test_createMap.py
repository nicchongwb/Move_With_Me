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

    def test_createMap_success(self):
        client = app.test_client(self)
        url = '/api/createChallenge'

        challengeName = "Whitebox-Testing"
        difficulty = "Hard"
        selTile = [ [ 0, 0 ], [ 0, 1 ], [ 1, 1 ], [ 2, 1 ], [ 2, 0 ], 
                    [ 3, 0 ], [ 4, 0 ], [ 4, 1 ], [ 4, 2 ], [ 4, 4 ], 
                    [ 4, 5 ], [ 3, 5 ], [ 2, 5 ], [ 1, 5 ], [ 1, 4 ], 
                    [ 1, 3 ], [ 2, 3 ], [ 3, 3 ], [ 4, 3 ], [ 5, 3 ], 
                    [ 6, 3 ], [ 6, 2 ], [ 6, 1 ], [ 6, 0 ], [ 7, 0 ], 
                    [ 8, 0 ], [ 8, 1 ], [ 8, 2 ], [ 8, 3 ], [ 8, 4 ], 
                    [ 8, 5 ], [ 7, 5 ], [ 7, 6 ], [ 7, 7 ], [ 6, 7 ], 
                    [ 5, 7 ], [ 4, 7 ], [ 4, 8 ], [ 4, 9 ], [ 5, 9 ], 
                    [ 6, 9 ], [ 8, 9 ], [ 7, 9 ], [ 9, 9 ] ]

        payload = {
            "name":challengeName,
            "difficulty":difficulty,
            "selTile":selTile
        }
        
        response = client.post(url, json=payload)
        expected_res = {"isSubmitted":True}

        print("\nTesting test_createMap()")
        print("POST /api/createChallenge")
        print("Payload : " + json.dumps(payload))
        print("\nExpected Response : " + json.dumps(expected_res))
        print("Response : " + json.dumps(response.get_json()))

        self.assertEqual(response.get_json(), expected_res)

if __name__ == "__main__":
    unittest.main()