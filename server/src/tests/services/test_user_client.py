import pytest
from src.services.user_client_service import UserClientService

@pytest.fixture(scope='session')
def user_by_id():
    id_user = '5'
    return UserClientService.get_id_user(id_user)

def test_get_id_user(user_by_id):

    assert user_by_id != None
    assert 'id_user' in user_by_id
    assert user_by_id['id_user'] == 5


# @pytest.fixture(scope='session')
# def user_client_service_id():
#     id_user = 5
#     return UserClientService.get_id_user(id_user)

# def test_get_id_user(user_client_service_id):
    
#     id_user = 5
#     user = UserClientService.get_id_user(id_user)
#     assert user is not None
#     assert user['id_user'] > 0

# def test_get_id_user(user_client_service_id):
#     id_user = 5
#     user = user_client_service_id.get_id_user(id_user)
#     assert user is not None
#     assert user["id_user"] == id_user

# def test_get_user_isistance_of_list(user_admin_service):
#     user = user_admin_service.get_id_user()
#     assert isinstance(user, list)