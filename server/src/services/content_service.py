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

            content_json = [{"id_content": row[0], "title_video": row[1], "pdf": row[2], "notes": row[3], "url_video": row[4], "description": row[5]} for row in result]
            connection.close()
            return content_json
        except Exception as ex:
            print(ex)
            