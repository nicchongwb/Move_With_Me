try:
    from run import app
    from flask_pymongo import PyMongo
    from pymongo import MongoClient
    import unittest, json, pymongo
    from flask import jsonify

except Exception as e:
    print(f"Some Modules are Missing {e}")

app.config["MONGO_URI"] = "mongodb://localhost:27017/mvm_db"
mongo = PyMongo(app)
db = mongo.db

class FlaskTest_challenges(unittest.TestCase):

    # Test Cases Select Challenge
    def test_challenges_get_200(self):
        tester = app.test_client(self)
        response = tester.get("/challenges")
        print("TEST CASE 1 SUCCESS: STATUS CODE 200")
        print('EXPECTED OUTPUT:\nSTATUS_CODE 200')
        print(f'ACTUAL OUTPUT:\nSTATUS_CODE {response.status_code}\n')

        self.assertEqual(response.status_code, 200)

    def test_challenges_get_Not_400(self):
        tester = app.test_client(self)
        response = tester.get("/challenges")
        print("TEST CASE 2 FAILURE: STATUS CODE 400")
        print('EXPECTED OUTPUT:\nNOT STATUS_CODE 400')
        print(f'ACTUAL OUTPUT:\nSTATUS_CODE {response.status_code}\n')

        self.assertNotEqual(response.status_code, 400)
    
    def test_challenges_get_Not_404(self):
        tester = app.test_client(self)
        response = tester.get("/challenges")
        print("TEST CASE 3 FAILURE: NOT STATUS CODE 404")
        print('EXPECTED OUTPUT:\nSTATUS_CODE 200')
        print(f'ACTUAL OUTPUT:\nSTATUS_CODE {response.status_code}\n')

        self.assertNotEqual(response.status_code, 404)


    def test_challenges_get_Not_500(self):
        tester = app.test_client(self)
        response = tester.get("/challenges")
        print("TEST CASE 4 FAILURE: NOT STATUS CODE 500")
        print('EXPECTED OUTPUT:\nSTATUS_CODE 200')
        print(f'ACTUAL OUTPUT:\nSTATUS_CODE {response.status_code}\n')

        self.assertNotEqual(response.status_code, 500)

    def test_challenges_get_data(self):

        tester = app.test_client(self)
        response = tester.get("/challenges")
        expected_data = []
        data = []
        # data replace with expected values
        cursor = mongo.db.Challenges.find()

        for ele1 in cursor:
            expected_data.append(str(ele1['_id']))

        for ele2 in response.get_json():
            data.append(ele2['_id'])
        print("TEST CASE 5 SUCCESS: DATA")
        print("EXPECT OUTPUT: \n", expected_data)
        print(f"ACTUAL OUTPUT: \n{data}\n")

        self.assertEqual(data, expected_data)

    def test_challenges_get_content(self):

        tester = app.test_client(self)
        response = tester.get("/challenges")
        print("TEST CASE 6 SUCCESS: CONTENT TYPE")
        print("EXPECT OUTPUT: \n", response.content_type)
        print("ACTUAL OUTPUT: \napplication/json\n")        
        self.assertEqual(response.content_type, "application/json")



if __name__ == "__main__":
    unittest.main()