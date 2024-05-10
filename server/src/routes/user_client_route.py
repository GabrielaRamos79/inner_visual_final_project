from flask import Blueprint, request, jsonify
from src.services.user_client_service import UserClientService
from src.models.user_model import User

main = Blueprint('inner_visual_client_blueprint', __name__)


@main.route('/get_user', methods = ['GET'])
def get_user():
    print("Hola get, user_router")
    get_user = UserClientService.get_user()
    print('Estoy dentro de metodo get')
    return jsonify(get_user)


@main.route('/get_user/<id>', methods = ['GET'])
def get_id_user(id):
    id_user = id
    print("Hola get_by_id")
    get_id_user = UserClientService.get_id_user(id_user)
    print('Estoy dentro de metodo get_by_id')
    return jsonify(get_id_user)

@main.route('/post_user', methods = ['POST'])
def post_user():
    print("Hola post, user_router")
    name = request.json['name'] 
    surname = request.json['surname']
    password = request.json['password']
    email = request.json['email']
    phone = request.json['phone']
    photo = request.json['photo']
    user_typeFK = request.json['user_typeFK']    
#     print(name_person_user)
#     print(surname_person_user)
#     print(name_user)
#     print(password_user)
#     print(user_typeFK)
    
    user_table = User(0, name, surname, password, email, phone, photo, user_typeFK)
    post_user = UserClientService.post_user(user_table)
    print(post_user)
    return 'Registro exitoso'

@main.route('/update_user/<id>', methods = ['PATCH'])
def updade_user(id):
    print("Hola patch, user_router")
    id_user = id
    name = request.json['name'] 
    surname = request.json['surname']
    password = request.json['password']
    email = request.json['email']
    phone = request.json['phone']
    photo = request.json['photo']
    user_typeFK = request.json['user_typeFK']
    
    user_table = User(id_user, name, surname, password, email, phone, photo, user_typeFK)
    patch_user = UserClientService.patch_user(user_table)
    print(patch_user)
    return 'Update exitoso'

@main.route('/delete_user/<id>', methods = ['DELETE'])
def delete_user(id):
    print("Hola delete, user_router")
    id_user = id
    delete_user = UserClientService.delete_user(id_user)
    print(delete_user)
    print(id_user)
    # print('Esto se imprime en consola')
    return 'Esto se ve en la pagina'