from app import app

# Main index route
@app.route("/members")
def members():
    return {"members": ["Mem1", "Mem2", "Mem3"]}