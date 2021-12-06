# # from flask import Flask, request
# # from flask_jwt_extended import JWTManager

# # app = Flask(__name__)


# # app.config["JWT_SECRET_KEY"] = "super-secret"  # Change this!
# # jwt = JWTManager(app)

# # flask imports
# from flask import Flask, request, jsonify, make_response
# import uuid # for public id
# from  werkzeug.security import generate_password_hash, check_password_hash
# # imports for PyJWT authentication
# import jwt
# import os
# from datetime import datetime, timedelta
# from functools import wraps

# from app import app, mongo


# app.config["JWT_SECRET_KEY"] = os.environ.get('JWT_SECRET')

# db = mongo.db

# def token_required(f):
#     @wraps(f)
#     def decorated(*args, **kwargs):
#         token = None
#         # jwt is passed in the request header
#         if 'x-access-token' in request.headers:
#             token = request.headers['x-access-token']
#         # return 401 if token is not passed
#         if not token:
#             return jsonify({'message' : 'Token is missing !!'}), 401
  
#         try:
#             # decoding the payload to fetch the stored details
#             data = jwt.decode(token, app.config['SECRET_KEY'])
#             current_user = db.adminUser.query\
#                 .filter_by(id = data['id'])\
#                 .first()
#         except:
#             return jsonify({
#                 'message' : 'Token is invalid !!'
#             }), 401
#         # returns the current logged in users contex to the routes
#         return  f(current_user, *args, **kwargs)
  
#     return decorated
  
# # User Database Route
# # this route sends back list of users users
# @app.route('/users', methods =['GET'])
# @token_required
# def get_all_users(current_user):
#     # querying the database
#     # for all the entries in it
#     users = db.adminUser.query.all()
#     # converting the query objects
#     # to list of jsons
#     output = []
#     for user in users:
#         # appending the user data json
#         # to the response list
#         output.append({
#             'id': user.id,
#             'name' : user.name,
#             'password' : user.password
#         })
  
#     return jsonify({'users': output})
  
# # route for logging user in
# @app.route('/admlogin', methods =['POST'])
# def login():
#     # creates dictionary of form data
#     auth = request.form
  
#     if not auth or not auth.get('username') or not auth.get('password'):
#         # returns 401 if any email or / and password is missing
#         return make_response(
#             'Could not verify',
#             401,
#             {'WWW-Authenticate' : 'Basic realm ="Login required !!"'}
#         )
  
#     user = db.adminUser.query\
#         .filter_by(username = auth.get('username'))\
#         .first()
  
#     if not user:
#         # returns 401 if user does not exist
#         return make_response(
#             'Could not verify',
#             401,
#             {'WWW-Authenticate' : 'Basic realm ="User does not exist !!"'}
#         )
  
#     if check_password_hash(user.password, auth.get('password')):
#         # generates the JWT Token
#         token = jwt.encode({
#             'id': user.id,
#             'username': user.username
#         }, app.config['SECRET_KEY'])
  
#         return make_response(jsonify({'token' : token.decode('UTF-8')}), 201)
#     # returns 403 if password is wrong
#     return make_response(
#         'Could not verify',
#         403,
#         {'WWW-Authenticate' : 'Basic realm ="Wrong Password !!"'}
#     )