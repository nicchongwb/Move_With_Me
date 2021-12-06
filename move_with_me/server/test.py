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

        self.assertEqual(response.status_code, 200)

    def test_index_get_Not_400(self):
        tester = app.test_client(self)
        response = tester.get("/")

        self.assertNotEqual(response.status_code, 400)
    
    def test_index_get_Not_404(self):
        tester = app.test_client(self)
        response = tester.get("/")

        self.assertNotEqual(response.status_code, 404)


    def test_index_get_Not_500(self):
        tester = app.test_client(self)
        response = tester.get("/")

        self.assertNotEqual(response.status_code, 500)


    def test_index_data(self):
        tester = app.test_client(self)
        response = tester.get("/")

        self.assertEqual(response.data, b'This is home() output from @app.route')

    # Test Cases Challenges
    def test_challenges_get_200(self):
        tester = app.test_client(self)
        response = tester.get("/challenges")

        self.assertEqual(response.status_code, 200)

    def test_challenges_get_Not_400(self):
        tester = app.test_client(self)
        response = tester.get("/challenges")

        self.assertNotEqual(response.status_code, 400)

    def test_challenges_get_Not_404(self):
        tester = app.test_client(self)
        response = tester.get("/challenges")

        self.assertNotEqual(response.status_code, 404)

    def test_challenges_get_Not_500(self):
        tester = app.test_client(self)
        response = tester.get("/challenges")

        self.assertNotEqual(response.status_code, 500)

    def test_challenges_data(self):
        tester = app.test_client(self)
        response = tester.get("/challenges")

        self.assertEqual(response.data, b'[]\n')

    def test_challenges_content(self):
        tester = app.test_client(self)
        response = tester.get("/challenges")

        self.assertEqual(response.content_type, "application/json")

    # Test Cases helloesp
    def test_helloesp_get(self):
        tester = app.test_client(self)
        response = tester.get("/helloesp")

        self.assertEqual(response.status_code, 200)

    def test_helloesp_get_Not_400(self):
        tester = app.test_client(self)
        response = tester.get("/helloesp")

        self.assertNotEqual(response.status_code, 400)

    def test_helloesp_get_Not_404(self):
        tester = app.test_client(self)
        response = tester.get("/helloesp")

        self.assertNotEqual(response.status_code, 404)

    def test_helloesp_get_Not_500(self):
        tester = app.test_client(self)
        response = tester.get("/helloesp")

        self.assertNotEqual(response.status_code, 500)

    def test_helloesp_data(self):
        tester = app.test_client(self)
        response = tester.get("/helloesp")

        self.assertEqual(response.data, b'Hello EcSP8266')

    # Test Case Save Commands
    def test_saveCommands_get(self):
        tester = app.test_client(self)
        response = tester.get("/saveCommands")

        self.assertEqual(response.status_code, 200)

    def test_saveCommands_get_Not_400(self):
        tester = app.test_client(self)
        response = tester.get("/saveCommands")

        self.assertNotEqual(response.status_code, 400)

    def test_saveCommands_get_Not_404(self):
        tester = app.test_client(self)
        response = tester.get("/saveCommands")

        self.assertNotEqual(response.status_code, 404)

    def test_saveCommands_get_Not_500(self):
        tester = app.test_client(self)
        response = tester.get("/saveCommands")

        self.assertNotEqual(response.status_code, 500)

    def test_saveCommands_post(self):
        tester = app.test_client(self)
        response = tester.post("/saveCommands", json={
            0:"left",
            1:"right"
        }) 

        self.assertEqual(response.data, b"True")

    def test_saveCommands_data_True(self):
        tester = app.test_client(self)
        response = tester.get("/saveCommands")

        self.assertEqual(response.data, b'True')

    def test_saveCommands_data_False(self):
        tester = app.test_client(self)
        response = tester.get("/saveCommands")

        self.assertNotEqual(response.data, b'False')

    def test_saveCommands_content(self):
        tester = app.test_client(self)
        response = tester.get("/saveCommands")

        self.assertEqual(response.content_type, "text/html; charset=utf-8")

    # Car Specs
    def test_carspecs_get_200(self):
        tester = app.test_client(self)
        response = tester.get("/carspecs")

        self.assertEqual(response.status_code, 200)

    def test_carspecs_get_Not_400(self):
        tester = app.test_client(self)
        response = tester.get("/carspecs")

        self.assertNotEqual(response.status_code, 400)

    def test_carspecs_get_Not_404(self):
        tester = app.test_client(self)
        response = tester.get("/carspecs")

        self.assertNotEqual(response.status_code, 404)

    def test_carspecs_get_Not_500(self):
        tester = app.test_client(self)
        response = tester.get("/carspecs")

        self.assertNotEqual(response.status_code, 500)

    def test_carspecs_data(self):
        tester = app.test_client(self)
        response = tester.get("/carspecs")

        self.assertEqual(response.data, b'This is carpsecs() output from @app.route')

    #Challenge Result
    def test_challengeResult_get_200(self):
        tester = app.test_client(self)
        response = tester.get("/api/challengeResult")

        self.assertEqual(response.status_code, 200)

    def test_challengeResult_get_Not_400(self):
        tester = app.test_client(self)
        response = tester.get("/api/challengeResult")

        self.assertNotEqual(response.status_code, 400)

    def test_challengeResult_get_Not_404(self):
        tester = app.test_client(self)
        response = tester.get("/api/challengeResult")

        self.assertNotEqual(response.status_code, 404)

    def test_challengeResult_get_Not_500(self):
        tester = app.test_client(self)
        response = tester.get("/api/challengeResult")

        self.assertNotEqual(response.status_code, 500)

    def test_challengeResult_data(self):
        tester = app.test_client(self)
        response = tester.get("/api/challengeResult")

        self.assertEqual(response.data, b'This is carpsecs() output from @app.route')



if __name__ == "__main__":
    unittest.main()