from flask import Blueprint, request, jsonify
from src.services.content_service import ContentService


main = Blueprint('inner_visual_content_blueprint', __name__)

@main.route('/get_content', methods = ['GET'])
def get_content():
    print("Hola get, content_router")
    get_content = ContentService.get_content()
    print('Estoy dentro de metodo get')
    return jsonify(get_content)

@main.route('/get_content/<id>', methods = ['GET'])
def get_content_by_id(id):
    id_content = id
    print("Hola get, content_router")
    get_content = ContentService.get_content_by_id(id_content)
    print('Estoy dentro de metodo get')
    return jsonify(get_content)