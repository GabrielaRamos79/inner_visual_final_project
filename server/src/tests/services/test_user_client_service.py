#Importamos pytes
import pytest

#Importamos Service
from src.services.user_client_service import UserClientService

@pytest.fixture(scope='session')
def userclient():
    return UserClientService.get_user()

def test_get_user_not_none(userclient):
    assert userclient != None

def test_get_user_isinstance_of_list(userclient):
    assert isinstance(userclient,list)

# def test_get_user_has_elements(u):
#     assert len(userclient) > 0

def test_patch_user_client_isinstance_of_list(userclient):
    assert isinstance(userclient,list)

def test_delete_user_client_isinstance_of_list(userclient): 
    assert isinstance(userclient,list)    