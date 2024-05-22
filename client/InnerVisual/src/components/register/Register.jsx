import { UserHandler } from './../../handler/UserHandler'
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import './register.css'

const Register = () => {
  const [userName, setuserName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault(); 
    
    let isValid = true;

    if (!userName ||!surname ||!email ||!password ||!phone) {
        isValid = false;
        Swal.fire('Error', 'Debes completar todos los campos', 'error');
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        isValid = false;
        Swal.fire('Error', 'El correo electrónico no es válido', 'error');
        return;
    }
    if (password.length < 8) {
        isValid = false;
        Swal.fire('Error', 'La contraseña debe tener al menos 8 caracteres', 'error');
        return;
    }
    if (phone.length < 8) {
      isValid = false;
      Swal.fire('Error', 'El teléfono debe tener al menos 9', 'error');
      return;
  }
    const formObject = {
      name: userName,
      surname: surname,
      email: email,
      password: password,
      phone: phone,
      photo: selectedFile? URL.createObjectURL(selectedFile) : null, 
      user_typeFK: 2 
    };
  
    try {
      await UserHandler.postUser(formObject);
      Swal.fire('Éxito', 'Usuario creado exitosamente.', 'success');
    } catch (error) {
      console.error(error);
      Swal.fire('Error', 'Hubo un problema al crear el usuario.', 'error');
    }
  };
  return (
    <>
<div className=" d-flex justify-content-center align-items-center container-custom-register" style={{ height: '100vh' }}>
  <form onSubmit={handleSubmit}>
    <h2 className='title'>Registro</h2>
    <div className="form-outline mb-4">
      <label className="form-label" htmlFor="form2Example1">Nombre</label>
      <input type="text"
        id="form2Example1"
        className="form-control" 
        name="name"
        value={userName}
        onChange={(e) => setuserName(e.target.value)} /> 
    </div>
    <div className="form-outline mb-4">
      <label className="form-label" htmlFor="form2Example2">Apellido</label>
      <input type="text"
        id="form2Example2"
        className="form-control"
        name="surname"
        value={surname}
        onChange={(e) => setSurname(e.target.value)} /> 
    </div>
    <div className="form-outline mb-4">
      <label className="form-label" htmlFor="form2Example3">Teléfono</label>
      <input type="text"
        id="form2Example3"
        className="form-control"
        name="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)} /> 
         
    </div>
    <div className="form-outline mb-4">
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Foto :</Form.Label>
        <Form.Control type="file" onChange={(e) => setSelectedFile(e.target.files[0])} />
      </Form.Group>
    </div>
    <div className="form-outline mb-4">
      <label className="form-label" htmlFor="form2Example4">Email</label>
      <input type="email"
        id="form2Example4"
        className="form-control"
        value={email}
        onChange={(e) => setEmail(e.target.value)} />
    </div>
    {/* <div className="form-outline mb-4">
      <label className="form-label" htmlFor="form2Example5">Password</label>
      <input type="text"
        id="form2Example5"
        className="form-control"
         />
    </div> */}
    <Form.Label htmlFor="inputPassword5">Password</Form.Label>
      <Form.Control
      value={password}
      onChange={(e) => setPassword(e.target.value)}
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
    <button type="submit" className="btn btn-primary btn-block mb-4">Enviar</button>
  </form>
</div>
    </>
  )
}

export default Register
