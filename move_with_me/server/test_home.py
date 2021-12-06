try:
    from run import app
    import unittest

except Exception as e:
    print(f"Some Modules are Missing {e}")


class FlaskTest(unittest.TestCase):

    # Test Cases Index
    def test_index_get_200(self):
        tester = app.test_client(self)
        response = tester.get("/")
        print("TEST CASE 1 SUCCESS: STATUS CODE 200")
        print('EXPECTED OUTPUT:\nSTATUS_CODE 200')
        print(f'ACTUAL OUTPUT:\nSTATUS_CODE {response.status_code}\n')
        self.assertEqual(response.status_code, 200)

    def test_index_get_Not_400(self):
        tester = app.test_client(self)
        response = tester.get("/")
        print("TEST CASE 2 FAILURE: STATUS CODE 400")
        print('EXPECTED OUTPUT:\nNOT STATUS_CODE 400')
        print(f'ACTUAL OUTPUT:\nSTATUS_CODE {response.status_code}\n')

        self.assertNotEqual(response.status_code, 400)
    
    def test_index_get_Not_404(self):
        tester = app.test_client(self)
        response = tester.get("/")
        print("TEST CASE 3 FAILURE: NOT STATUS CODE 404")
        print('EXPECTED OUTPUT:\nSTATUS_CODE 200')
        print(f'ACTUAL OUTPUT:\nSTATUS_CODE {response.status_code}\n')

        self.assertNotEqual(response.status_code, 404)


    def test_index_get_Not_500(self):
        tester = app.test_client(self)
        response = tester.get("/")
        print("TEST CASE 4 FAILURE: NOT STATUS CODE 500")
        print('EXPECTED OUTPUT:\nSTATUS_CODE 200')
        print(f'ACTUAL OUTPUT:\nSTATUS_CODE {response.status_code}\n')

        self.assertNotEqual(response.status_code, 500)


    def test_index_data(self):
        tester = app.test_client(self)
        response = tester.get("/")
        print("TEST CASE 5 SUCCESS: DATA")
        print('EXPECTED OUTPUT:\This is home() output from @app.route')
        print(f'ACTUAL OUTPUT:\nSTATUS_CODE {response.data}\n')

        self.assertEqual(response.data, b'This is home() output from @app.route')



if __name__ == "__main__":
    unittest.main()