class User_content():
    def __init__(self, id_user_content, userFK, contentFK, status_video, notes) -> None:
        self.id_user_content = id_user_content
        self.userFK = userFK
        self.contentFK = contentFK
        self.status_video = status_video
        self.notes = notes
        