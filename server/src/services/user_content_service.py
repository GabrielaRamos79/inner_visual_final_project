from src.database.db_mysql import get_connection
from werkzeug.security import generate_password_hash
from src.models.user_content_model import User_content

# from werkzeug.security import generate_password_hash

class UserContentService():
    @classmethod
    def get_user_content(cls):
        try:
            connection  = get_connection()
            print(connection)
            with connection.cursor() as cursor:
                # cursor.execute('SELECT * FROM user_content')
                cursor.callproc('sp_get_user_content')
                result = cursor.fetchall()
                print(result)

            users_content_json = [{"id_user_content": row[0], "id_user": row[1], "name": row[2], "surname": row[3], "id_content": row[4],  "title_video": row[5], "status_video": row[6]} for row in result]
            connection.close()
            return users_content_json
        except Exception as ex:
            print(ex)

@classmethod
def post_user_content(cls, user_table:User_content):
        try:
            connection  = get_connection()
            print(connection)
            #id_user = user_table.id_user
            userFK = User_content.userFK
            contentFK = User_content.contentFK
            status_video = User_content.status_video
            
                 
            with connection.cursor() as cursor:
                
                # cursor.execute("INSERT INTO user(id_user, name_user, password_user, id_user_typeFK) VALUES ({0}, '{1}', '{2}', {3})"
                            #    .format(id_user,name_user,password_user,user_typeFK))
                cursor.callproc('sp_post_user_content', (userFK,contentFK,status_video))
                connection.commit()
                print('User_content added successfully')
            connection.close()
            return "Data base user_contentis close"
        except Exception as ex:
            print(ex)
                       