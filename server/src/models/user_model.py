class User():
    def __init__(self, id_user, name, surname, password, email, phone, photo, user_typeFK) -> None:
        self.id_user = id_user
        self.name = name
        self.surname = surname
        self.password = password
        self.email = email
        self.phone = phone
        self.photo = photo
        self.user_typeFK = user_typeFK
