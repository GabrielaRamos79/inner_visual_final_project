from flask import Blueprint, request, jsonify
from src.services.auth_service import  AuthService
from src.models.user_model import User
from src.utils.security import Security

main = Blueprint('login_blueprint', __name__)

@main.route('/', methods = ['POST'])
def login_user():
    email = request.json['email']
    password = request.json['password']
    print(email)
    print(password)
    user_table = (User(0,None,None,password,email,None,None,None))
    auth_user = AuthService.verify_identity(user_table)
    if (auth_user != None):
        encode_token= Security.generate_token(auth_user)
        return jsonify({'success':True, 'token':encode_token})
    else:
        return jsonify({'success':False})
    