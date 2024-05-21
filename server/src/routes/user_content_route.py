from flask import Blueprint, request, jsonify
from src.services.user_content_service import UserContentService
from src.models.user_content_model import User_content

main = Blueprint('inner_visual_user_content_blueprint', __name__)


@main.route('/get_user_content', methods = ['GET'])
def get_user_content():
    print("Hola get, user_content_router")
    get_user_content = UserContentService.get_user_content()
    print('Estoy dentro de metodo get_user_content')
    return jsonify(get_user_content)

@main.route('/post_user_content', methods = ['POST'])
def post_user_content():
    print("Hola post, user_content_router")

    userFK = request.json['userFK']
    contentFK = request.json['contentFK']
    status_video = request.json['status_video']

    user_content_table = User_content(0, userFK, contentFK, status_video)
    post_user_content = UserContentService.post_user_content(user_content_table)
    print(post_user_content)
    return 'Registro exitoso'