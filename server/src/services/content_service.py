from src.database.db_mysql import get_connection
from src.models.content_model import Content


class ContentService():
    @classmethod
    def get_content(cls):
        try:
            connection  = get_connection()
            print(connection)
            with connection.cursor() as cursor:
                # cursor.execute('SELECT * FROM content')
                cursor.callproc('sp_get_content')
                result = cursor.fetchall()
                print(result)

            content_json = [{"id_content": row[0], "title_video": row[1], "pdf": row[2], "url_video": row[3], "description": row[4]} for row in result]
            connection.close()
            return content_json
        except Exception as ex:
            print(ex)
            
    @classmethod
    def get_content_by_id(cls, id_content):
        try:
            connection  = get_connection()
            print(connection)
            with connection.cursor() as cursor:
                # cursor.execute('SELECT * FROM content')
                cursor.callproc('sp_get_content_by_id', (id_content))
                result = cursor.fetchone()
                if result is None:
                    print("No se encontró el usuario con el ID proporcionado.")
                    return None
                # Asegurarse de que result es un iterable antes de acceder a sus elementos
                if not isinstance(result, tuple):
                    print("El resultado no es un iterable válido.")
                    return None
                content_json = {"id_content": result[0], 
                            "title_video": result[1], 
                            "pdf": result[2], 
                            "url_video": result[3], 
                            "description": result[4] } 
            connection.close()
            return content_json
        except Exception as ex:
            print(ex)            
            