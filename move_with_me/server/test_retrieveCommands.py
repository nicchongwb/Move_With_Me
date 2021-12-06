try:
    from run import app
    import unittest

except Exception as e:
    print(f"Some Modules are Missing {e}")


class FlaskTest(unittest.TestCase):

    # Test Cases Index
    def test_index_get_200(self):
        tester = app.test_client(self)
        response = tester.get("/retrieveCommands")

        print('TEST CASE 1 SUCESS: STATUS CODE 200')
        print(f'EXPECTED OUTPUT:\n200')
        print(f'ACTUAL OUTPUT:\n{response.status_code}\n')

        self.assertEqual(response.status_code, 200)

    def test_index_get_Not_400(self):
        tester = app.test_client(self)
        response = tester.get("/retrieveCommands")
        print('TEST CASE 2 FAILURE: STATUS CODE 400')
        print(f'EXPECTED OUTPUT:\nNOT 400')
        print(f'ACTUAL OUTPUT:\n{response.status_code}\n')

        self.assertNotEqual(response.status_code, 400)
    
    def test_index_get_Not_404(self):
        tester = app.test_client(self)
        response = tester.get("/retrieveCommands")
        print('TEST CASE 3 FAILURE: STATUS CODE 404')
        print(f'EXPECTED OUTPUT:\nNOT 404')
        print(f'ACTUAL OUTPUT:\n{response.status_code}\n')

        self.assertNotEqual(response.status_code, 404)


    def test_index_get_Not_500(self):
        tester = app.test_client(self)
        response = tester.get("/retrieveCommands")
        print('TEST CASE 4 FAILURE: STATUS CODE 500')
        print(f'EXPECTED OUTPUT:\nNOT 500')
        print(f'ACTUAL OUTPUT:\n{response.status_code}\n')

        self.assertNotEqual(response.status_code, 500)


    def test_index_data(self):
        tester = app.test_client(self)
        tester.post("/saveCommands", data={"0": "left","1":"right", "2": "up", "3":"down"})
        response = tester.get("/retrieveCommands")
        print('TEST CASE 5 SUCCESS: RETURN 1 COMMAND FIFO')
        print(f'EXPECTED OUTPUT:\nb\'0\\x00\'')
        print(f'ACTUAL OUTPUT:\n{response.data}\n')

        self.assertEqual(response.data, b'0\x00')


if __name__ == "__main__":
    unittest.main()