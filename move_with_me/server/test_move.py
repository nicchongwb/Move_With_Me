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

    def test_move_success(self):
        client = app.test_client(self)
        url = '/api/move'

        elementData = [
            'up', 'up', 'up',
            'up', 'up', 'up',
            'up', 'up', 'up',
            'right', 'right', 'right',
            'right', 'right', 'right',
            'right', 'right', 'right'
        ]
        
        score = 0
        challenge = 1
        position = {"x":0, "y":0}
        chStatus = 'Running'

        payload = {
            "commands":elementData,
            "score":score,
            "challengeID":challenge,
            "position": position,
            "chStatus": chStatus
        }

        expected_res = payload
        expectedPosition = {"x": 9, "y": 9}
        expectedscore = 18
        expectedChStatus = 'Completed'
        expected_res["position"] = expectedPosition
        expected_res["score"] = expectedscore
        expected_res["chStatus"] = expectedChStatus
        
        response = client.post(url, json=payload)      

        print("\nTesting test_storeRanking_success()")
        print("POST /api/storeRanking")
        print("Payload : " + json.dumps(payload))
        print("\nExpected Response : " + json.dumps(expected_res))
        print("Response : " + json.dumps(response.get_json()))

        self.assertEqual(response.get_json(), expected_res)

if __name__ == "__main__":
    unittest.main()