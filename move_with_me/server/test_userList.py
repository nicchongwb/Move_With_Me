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

    # Test Cases usersList
    def test_usersList_get_200(self):
        tester = app.test_client(self)
        response = tester.get("/usersList")

        print('TEST CASE 1 SUCESS: STATUS CODE 200')
        print(f'EXPECTED OUTPUT:\n200')
        print(f'ACTUAL OUTPUT:\n{response.status_code}\n')

        self.assertEqual(response.status_code, 200)

    def test_usersList_get_Not_400(self):
        tester = app.test_client(self)
        response = tester.get("/usersList")
        print('TEST CASE 2 FAILURE: STATUS CODE 400')
        print(f'EXPECTED OUTPUT:\nNOT 400')
        print(f'ACTUAL OUTPUT:\n{response.status_code}\n')

        self.assertNotEqual(response.status_code, 400)
    
    def test_usersList_get_Not_404(self):
        tester = app.test_client(self)
        response = tester.get("/usersList")
        print('TEST CASE 3 FAILURE: STATUS CODE 404')
        print(f'EXPECTED OUTPUT:\nNOT 404')
        print(f'ACTUAL OUTPUT:\n{response.status_code}\n')

        self.assertNotEqual(response.status_code, 404)


    def test_usersList_get_Not_500(self):
        tester = app.test_client(self)
        response = tester.get("/usersList")
        print('TEST CASE 4 FAILURE: STATUS CODE 500')
        print(f'EXPECTED OUTPUT:\nNOT 500')
        print(f'ACTUAL OUTPUT:\n{response.status_code}\n')

        self.assertNotEqual(response.status_code, 500)


    def test_usersList_content_type(self):
        tester = app.test_client(self)
        response = tester.get("/usersList")
        print('TEST CASE 5 SUCCESS: CONTENT TYPE')
        print(f'EXPECTED OUTPUT:\napplication/json')
        print(f'ACTUAL OUTPUT:\n{response.content_type}\n')

        self.assertEqual(response.content_type, 'application/json')


    def test_usersList_data(self):
        tester = app.test_client(self)
        response = tester.get("/usersList")
        print('TEST CASE 6 SUCCESS: DATA')

        expected_data = []
        data = []

        cursor = db.users.find()

        for ele1 in cursor:
            expected_data.append(str(ele1['_id']))
        
        for ele2 in response.get_json():
            data.append(str(ele2['_id']))

        print(f'EXPECTED OUTPUT:\n{expected_data}')
        print(f'ACTUAL OUTPUT:\n{data}\n')

        self.assertEqual(data, expected_data)


if __name__ == "__main__":
    unittest.main()