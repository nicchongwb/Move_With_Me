from app import app

# Main index route
@app.route("/")
def home():
    return "This is home() output from @app.route"