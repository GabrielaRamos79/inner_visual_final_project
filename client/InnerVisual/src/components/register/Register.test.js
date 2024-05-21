import React from 'react';
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import Register from './Register';
import Swal from 'sweetalert2';
import UserHandler from '../../handler/UserHandler';

jest.mock('sweetalert2', () => ({
    fire: jest.fn(),
}));

jest.mock('./../../handler/UserHandler', () => ({
    UserHandler: {
        postUser: jest.fn().mockResolvedValueOnce({}),
    },
}));

global.URL.createObjectURL = jest.fn(() => 'mocked-url');

test('renders Register component without crashing', () => {
    render(<Register />);

    expect(screen.getByText('Registro')).toBeInTheDocument();
    expect(screen.getByLabelText('Nombre')).toBeInTheDocument();
    expect(screen.getByLabelText('Apellidos :')).toBeInTheDocument();
    expect(screen.getByLabelText('Email :')).toBeInTheDocument();
    expect(screen.getByLabelText('Contraseña :')).toBeInTheDocument();
    expect(screen.getByLabelText('Teléfono :')).toBeInTheDocument();
    expect(screen.getByText('Foto :')).toBeInTheDocument();
    expect(screen.getByText('Comprar')).toBeInTheDocument();
});

test('submits the form succesfully', async () => {
    render(<Register />);

    fireEvent.change(screen.getByLabelText('Nombre'), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText('Apellidos :'), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText('Email :'), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText('Contraseña :'), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText('Teléfono :'), { target: { value: '' } });

    const file = new File (['(¬□_□)'], 'chucknorris.png', { type: 'image/png' });
    fireEvent.change(screen.getByLabelText('Foto :'), { target: { files: [file] } });

    fireEvent.click(screen.getByText('Comprar'));

    await waitFor(() => expect(Swal.fire).toHaveBeenCalledWith('Éxito', 'Usuario creado exitosamente.', 'success'));
    // await screen.findByText('Usuario creado exitosamente.');

    // expect(screen.getByText('Usuario creado exitosamente.')).toBeInTheDocument();
});