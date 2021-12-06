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

    def test_challengeResult_success(self):
        client = app.test_client(self)
        url = '/api/challengeResult'

        rankingID = 1
        chID = 0
        chName = ''

        payload = {
            "rankID":rankingID,
        }

        expectedRecords = []

        # Get requsted Rank Document
        userRankDoc = {}
        _userRankDocument = mongo.db.Rankings.find({"id":rankingID})

        for doc in _userRankDocument:
            userRankDoc["id"] = doc["id"]
            userRankDoc["name"] = doc["name"]
            userRankDoc["score"] = doc["score"]
            userRankDoc["challenge"] = doc["challenge"]
            chID = doc["challenge"]

        # Get expectedRecords
        _challengeName = mongo.db.Challenges.find({"challenge":chID}).limit(1)
        for doc in _challengeName:
            chName = doc["name"] # Get challengeName 

        # Fetch top 3 scorers of the challenge
        _topThreeRankDocs = mongo.db.Rankings.find({"challenge":chID}).sort("score",-1).limit(3)
        topThreeRankDocArr = []
        for doc in _topThreeRankDocs:
            topThreeRankDocArr.append(doc)

        # Clean up topThreeRankDocArr to remove "_id" key
        for element in topThreeRankDocArr:
            element.pop("_id")

        # Prepare expected_res
        returnRecords = topThreeRankDocArr
        # Check if reqUser is in top 3
        if userRankDoc not in topThreeRankDocArr:
            returnRecords.append(userRankDoc)

         # Add challengeName key/value into returnRecords list
        for record in returnRecords:
            record["challengeName"] = chName

        response = client.post(url, json=payload)
        expected_res = {"rankingData":returnRecords}

        print("\nTesting test_challengeResult_success()")
        print("POST /api/challengeResult")
        print("Payload : " + json.dumps(payload))
        print("\nExpected Response : " + json.dumps(expected_res))
        print("Response : " + json.dumps(response.get_json()))

        self.assertEqual(response.get_json(), expected_res)

if __name__ == "__main__":
    unittest.main()