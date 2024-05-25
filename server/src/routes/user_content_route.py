from flask import Blueprint, request, jsonify
from src.services.user_content_service import UserContentService
from src.models.user_content_model import User_content
main = Blueprint('inner_visual_user_content_blueprint', __name__)
@main.route('/get_user_content/<id>', methods = ['GET'])
def get_user_content(id):
    id_userFK = id
    print("Hola get, user_content_router")
    get_user_content = UserContentService.get_user_content(id_userFK)
    print('Estoy dentro de metodo get_user_content')
    return jsonify(get_user_content)
@main.route('/post_user_content', methods=['POST'])
def post_user_content():
    print("Hola post, user_content_router")
    try:
        userFK = request.json['id_userFK']
        post_user_content = UserContentService.post_user_content(userFK)
        print(post_user_content)
        return jsonify({"message": "Registro exitoso"}), 200
    except Exception as ex:
        print(ex)
        return jsonify({"error": str(ex)}), 500
@main.route('/update_user_content/<id_user>/<id_content>', methods = ['PATCH'])
def updade_status_video(id_user, id_content):
    print("Hola patch, user_router")
    try:
        userFK = id_user
        contentFK = id_content
        # status_video = request.json['status_video']
        #user_content_table = User_content(None, userFK, contentFK, status_video, None)
        patch_user_content = UserContentService.patch_user_content(userFK, contentFK)
        print(patch_user_content)
        return jsonify({"message": "Registro exitoso"}), 200
    except Exception as ex:
        print(ex)
        return jsonify({"error": str(ex)}), 500
    
@main.route('/update_notes/<id_user>/<id_content>', methods = ['PATCH'])
def updade_notes(id_user, id_content):
    print("Hola patch, user_router")
    try:
        userFK = id_user
        contentFK = id_content
        notes = request.json['notes'] 

    
        user_content_table = User_content(None, userFK, contentFK, None, notes)
        patch_notes = UserContentService.patch_user_content_notes(user_content_table)
        print(patch_notes)
        return jsonify({"message": "Registro exitoso"}), 200
    except Exception as ex:
        print(ex)
        return jsonify({"error": str(ex)}), 500