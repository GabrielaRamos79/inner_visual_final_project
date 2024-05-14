import pytest

from src.services.user_admin_service import UserAdminService

@pytest.fixture(scope='session')
def user_admin_service():
    return UserAdminService()

def test_get_user_not_none(user_admin_service):
    user = user_admin_service.get_user()
    assert user is not None

def test_get_user_isistance_of_list(user_admin_service):
    user = user_admin_service.get_user()
    assert isinstance(user, list)