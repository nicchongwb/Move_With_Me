try:
    from run import app
    import unittest

except Exception as e:
    print(f"Some Modules are Missing {e}")


class FlaskTest(unittest.TestCase):

    # Test Cases saveUsers
    def test_saveUsers_get_200(self):
        tester = app.test_client(self)
        response = tester.get("/saveUsers")

        print('TEST CASE 1 SUCESS: STATUS CODE 200')
        print(f'EXPECTED OUTPUT:\n200')
        print(f'ACTUAL OUTPUT:\n{response.status_code}\n')

        self.assertEqual(response.status_code, 200)

    def test_saveUsers_get_Not_400(self):
        tester = app.test_client(self)
        response = tester.get("/saveUsers")
        print('TEST CASE 2 FAILURE: STATUS CODE 400')
        print(f'EXPECTED OUTPUT:\nNOT 400')
        print(f'ACTUAL OUTPUT:\n{response.status_code}\n')

        self.assertNotEqual(response.status_code, 400)
    
    def test_saveUsers_get_Not_404(self):
        tester = app.test_client(self)
        response = tester.get("/saveUsers")
        print('TEST CASE 3 FAILURE: STATUS CODE 404')
        print(f'EXPECTED OUTPUT:\nNOT 404')
        print(f'ACTUAL OUTPUT:\n{response.status_code}\n')

        self.assertNotEqual(response.status_code, 404)


    def test_saveUsers_get_Not_500(self):
        tester = app.test_client(self)
        response = tester.get("/saveUsers")
        print('TEST CASE 4 FAILURE: STATUS CODE 500')
        print(f'EXPECTED OUTPUT:\nNOT 500')
        print(f'ACTUAL OUTPUT:\n{response.status_code}\n')

        self.assertNotEqual(response.status_code, 500)

    def test_saveUsers_post(self):
        tester = app.test_client(self)
        tester.post("/saveCommands", data={"playerName": "Zj"})
        response = tester.get("/saveUsers")
        print('TEST CASE 5 SUCCESS: INSERT')
        print(f'EXPECTED OUTPUT:\nb\'False\'')
        print(f'ACTUAL OUTPUT:\n{response.data}\n')

        self.assertEqual(response.data, b'False')


if __name__ == "__main__":
    unittest.main()