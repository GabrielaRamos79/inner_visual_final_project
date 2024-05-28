import pytest

# Importamos Service
from src.services.user_content_service import UserContentService

@pytest.fixture(scope='session')
def user_content_id():
    return 6  # або інше значення, яке підходить для ваших тестів

@pytest.fixture(scope='session')
def user_content_v(user_content_id):
    return UserContentService.get_user_content(user_content_id)

def test_get_user_content_not_none(user_content_v):
    assert user_content_v is not None

def test_get_user_content_isinstance_of_list(user_content_v):
    assert isinstance(user_content_v, list)

# def test_get_user_has_elements(u):
#     assert len(userclient) > 0

def test_post_user_content_isinstance_of_list(user_content_v):
    assert isinstance(user_content_v, list)
