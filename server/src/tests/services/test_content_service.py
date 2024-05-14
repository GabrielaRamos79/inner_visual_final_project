#Importamos pytes
import pytest

#Importamos Service
from src.services.content_service import ContentService
@pytest.fixture(scope='session')
def content():
    return ContentService.get_content()

def test_get_content_not_none(content):
    assert content != None

def test_get_content_isinstance_of_list(content):
    assert isinstance(content,list)

# def test_get_user_has_elements(u):
#     assert len(userclient) > 0