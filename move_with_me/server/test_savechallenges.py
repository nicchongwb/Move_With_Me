try:
    from run import app
    import unittest

except Exception as e:
    print(f"Some Modules are Missing {e}")


class FlaskTest(unittest.TestCase):

    # Test Case Save Commands
    def test_saveCommands_get(self):
        tester = app.test_client(self)
        response = tester.get("/saveCommands")
        print("TEST CASE 1 SUCCESS: STATUS CODE 200")
        print(f'EXPECTEd OUTPUT:\n200')
        print(f'ACTUAL OUTPUT:\n{response.status_code}\n')
        self.assertEqual(response.status_code, 200)

    def test_saveCommands_get_Not_400(self):
        tester = app.test_client(self)
        response = tester.get("/saveCommands")
        print("TEST CASE 2 FAILURE: STATUS CODE 400")
        print(f'EXPECTEd OUTPUT:\nNOT 400')
        print(f'ACTUAL OUTPUT:\n{response.status_code}\n')

        self.assertNotEqual(response.status_code, 400)

    def test_saveCommands_get_Not_404(self):
        tester = app.test_client(self)
        response = tester.get("/saveCommands")
        print("TEST CASE 3 FAILURE: STATUS CODE 404")
        print(f'EXPECTEd OUTPUT:\nNOT 404')
        print(f'ACTUAL OUTPUT:\n{response.status_code}\n')

        self.assertNotEqual(response.status_code, 404)

    def test_saveCommands_get_Not_500(self):
        tester = app.test_client(self)
        response = tester.get("/saveCommands")
        print("TEST CASE 4 FAILURE: STATUS CODE 500")
        print(f'EXPECTEd OUTPUT:\nNOT 500')
        print(f'ACTUAL OUTPUT:\n{response.status_code}\n')

        self.assertNotEqual(response.status_code, 500)

    def test_saveCommands_post(self):
        tester = app.test_client(self)
        response = tester.post("/saveCommands", json={
            0:"left",
            1:"right"
        }) 

        print("TEST CASE 5 SUCCESS: INSERT RESULT")
        print(f'EXPECTEd OUTPUT:\nTrue')
        print(f'ACTUAL OUTPUT:\n{response.status_code}\n')

        self.assertEqual(response.data, b"True")

    def test_saveCommands_data_True(self):
        tester = app.test_client(self)
        response = tester.get("/saveCommands")
        print("TEST CASE 6 SUCCESS: GET DATA")
        print(f'EXPECTEd OUTPUT:\nTrue')
        print(f'ACTUAL OUTPUT:\n{response.data}\n')

        self.assertEqual(response.data, b'True')

    def test_saveCommands_data_False(self):
        tester = app.test_client(self)
        response = tester.get("/saveCommands")
        print("TEST CASE 7 FAILURE: GET DATA")
        print(f'EXPECTEd OUTPUT:\nNOT False')
        print(f'ACTUAL OUTPUT:\n{response.data}\n')

        self.assertNotEqual(response.data, b'False')

    def test_saveCommands_content(self):
        tester = app.test_client(self)
        response = tester.get("/saveCommands")
        print("TEST CASE 8 SUCCESS: CONTENT TYPE")
        print(f'EXPECTEd OUTPUT:\ntext/html; charset=utf-8')
        print(f'ACTUAL OUTPUT:\n{response.content_type}\n')

        self.assertEqual(response.content_type, "text/html; charset=utf-8")



if __name__ == "__main__":
    unittest.main()