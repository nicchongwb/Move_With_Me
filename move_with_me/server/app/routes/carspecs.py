from app import app

# Main index route
@app.route("/carspecs")
def carspecs():
    return f"This is carpsecs() output from @app.route"