from app import app
from flask import request, render_template


# Select Challenge route
@app.route("/selectchallenge", methods=["GET"])
def displayChallengeList():
    return render_template()