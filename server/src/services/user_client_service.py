from src.database.db_mysql import get_connection
from werkzeug.security import generate_password_hash
from src.models.user_model import User

# from werkzeug.security import generate_password_hash

class UserClientService():
    @classmethod
    def get_user(cls):
        try:
            connection  = get_connection()
            print(connection)
            with connection.cursor() as cursor:
                # cursor.execute('SELECT * FROM user')
                cursor.callproc('sp_get_user_client')
                result = cursor.fetchall()
                print(result)

            users_json = [{"id_user": row[0], "name": row[1], "surname": row[2], "password": row[3], "email": row[4], "phone": row[5], "photo": row[6], "user_typeFK": row[7]} for row in result]
            connection.close()
            return users_json
        except Exception as ex:
            print(ex)
    
    @classmethod
    def get_id_user(cls, id_user):
        try:
            connection  = get_connection()
            # print(connection)
            with connection.cursor() as cursor:
                # cursor.execute('SELECT * FROM user')
                cursor.callproc('sp_get_client_by_id', (id_user))
                result = cursor.fetchone()
                if result is None:
                    print("No se encontró el usuario con el ID proporcionado.")
                    return None
                # Asegurarse de que result es un iterable antes de acceder a sus elementos
                if not isinstance(result, tuple):
                 print("El resultado no es un iterable válido.")
                 return None
            users_json = {
                "id_user": result[0],
                "name": result[1],
                "surname": result[2],
                "password": result[3],
                "email": result[4],
                "phone": result[5],
                "photo": result[6],
                "user_typeFK": result[7]
            }
            # users_json = [{"id_user": row[0], "name": row[1], "surname": row[2], "password": row[3], "email": row[4], "phone": row[5], "photo": row[6], "user_typeFK": row[7]} for row in result]
            # connection.close()
            print(users_json)
            return users_json
        except Exception as ex:
            print(f"Error al obtener el ID del usuario: {ex}")
            return None
        finally:
            connection.close()
            
    @classmethod
    def post_user(cls, user_table:User):
        try:
            connection  = get_connection()
            print(connection)
            #id_user = user_table.id_user
            name = user_table.name
            surname = user_table.surname
            password = user_table.password
            email = user_table.email
            phone = user_table.phone
            photo = user_table.photo
            user_typeFK = user_table.user_typeFK
            
            encrypted_password = generate_password_hash(password, 'pbkdf2', 30)
            
            # # Comprobamos si email y password son unicos
            # with connection.cursor() as cursor:
            #     cursor.callproc('sp_check_user_uniqueness', (user_table.email, encrypted_password))
            #     affected_rows = cursor.rowcount
            # if affected_rows > 0:
            #     raise ValueError("Email or password already exists")
            
            
            with connection.cursor() as cursor:
                
                # cursor.execute("INSERT INTO user(id_user, name_user, password_user, id_user_typeFK) VALUES ({0}, '{1}', '{2}', {3})"
                            #    .format(id_user,name_user,password_user,user_typeFK))
                cursor.callproc('sp_post_user', (name,surname,encrypted_password,email,phone,photo,user_typeFK))
                connection.commit()
                print('User added successfully')
            connection.close()
            return "Data base is close"
        except Exception as ex:
            print(ex)
            
    @classmethod
    def patch_user(cls, user_table:User):
        try:
            connection  = get_connection()
            id_user = user_table.id_user
            name = user_table.name
            surname = user_table.surname
            password = user_table.password
            email = user_table.email
            phone = user_table.phone
            photo = user_table.photo
            user_typeFK = user_table.user_typeFK
            
            encrypted_password = generate_password_hash(password, 'pbkdf2', 30)
            
             # Comprobamos si email y password son unicos
            with connection.cursor() as cursor:
                cursor.callproc('sp_check_user_uniqueness', (user_table.email, encrypted_password))
                affected_rows = cursor.rowcount
            if affected_rows > 0:
                raise ValueError("Email or password already exists")
            
            
            with connection.cursor() as cursor:
                # cursor.execute("UPDATE user SET  name_user = '{0}', password_user = '{1}', id_user_typeFK = {2}  WHERE user.id_user = {3}".format(name_user,password_user,user_typeFK,id_user))
                cursor.callproc('sp_update_user', (id_user,name,surname,encrypted_password,email,phone,photo,user_typeFK))
                connection.commit()
                print('User updated successfully')
            connection.close()
            return "Data base is close"
        except Exception as ex:
            print(ex)
            
    @classmethod
    def delete_user(cls, id_user):
        try:
            connection  = get_connection()
            print(connection)
            print(id_user)
            with connection.cursor() as cursor:
                # cursor.execute('DELETE FROM user WHERE user.id_user = %s', (id_user)) 
                cursor.callproc('sp_delete_user', (id_user,)) # Aqui uso otro metodo callproc para trabajar con procedimientos
                connection.commit()
            connection.close()
            return "Data base is close"
        except Exception as ex:
            print(ex)





