from src.database.db_mysql import get_connection
from src.models.user_content_model import User_content


class UserContentService():
    @classmethod
    def get_user_content(cls, id):
        try:
            connection = get_connection()
            print(connection)
            with connection.cursor() as cursor:
                # cursor.execute('SELECT * FROM user_content')
                cursor.callproc('sp_get_user_content_by_id', (id))
                result = cursor.fetchall()
                print(result)

            users_content_json = [{"id_user_content": row[0], "id_user": row[1], "name": row[2], "surname": row[3], "id_content": row[4],  "title_video": row[5], "pdf": row[6], "url_video": row[7], "description": row[8], "status_video": row[9], "notes":[10]} for row in result]
            connection.close()
            return users_content_json
        except Exception as ex:
            print(ex)


    @classmethod
    def post_user_content(cls, userFK):
        try:
            connection = get_connection()
            print(connection)

            with connection.cursor() as cursor:
                cursor.callproc('AddUserContent', (userFK,))
                connection.commit()
                print('User_content added successfully')

            connection.close()
            return "Database connection closed"
        except Exception as ex:
            print(ex)
            return str(ex)
        
        
    # @classmethod
    # def post_user_content(cls, user_content_table:User_content):
    #     try:
    #         connection  = get_connection()
    #         print(connection)
            
    #         userFK = user_content_table.userFK
    #         contentFK = user_content_table.contentFK
    #         status_video = user_content_table.status_video
            
                 
    #         with connection.cursor() as cursor:
    #             cursor.callproc('sp_post_user_content', (userFK,contentFK,status_video))
    #             connection.commit()
    #             print('User_content added successfully')
    #         connection.close()
    #         return "Data base user_contentis close"
    #     except Exception as ex:
    #         print(ex)
                       