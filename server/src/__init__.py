from flask import Flask
from .routes import user_admin_route
from .routes import user_client_route
from .routes import content_route
from .routes import auth_route
from flask_cors import  CORS

app = Flask( __name__ )
CORS(app,resources={"*":{"origins": "http://localhost:5173"}})
def init_app(config):
    app.config.from_object(config)
    app.register_blueprint(user_admin_route.main, url_prefix='/user_admin')
    app.register_blueprint(user_client_route.main, url_prefix='/user_client')
    app.register_blueprint(content_route.main, url_prefix='/content')
    app.register_blueprint(auth_route.main, url_prefix='/login')
    return app