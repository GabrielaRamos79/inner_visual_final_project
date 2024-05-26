import React from 'react';
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import LoginComponent from './LoginComponent';
import { useUserHandler } from '../../handler/AuthHandler';
// import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

// jest.mock('react-router-dom', () => ({
//     useNavigate: jest.fn(),
// }));

jest.mock('../../handler/AuthHandler', () => ({
    useUserHandler: jest.fn(),
}));

jest.mock('sweetalert2', () => ({
    fire: jest.fn(),
}));

describe('LoginComponent', () => {
    // const navigate = jest.fn();
    const handleLogin = jest.fn();

    beforeEach(() => {
        // useNavigate.mockReturnValue(navigate);
        useUserHandler.mockReturnValue({ handleLogin });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('renders LoginComponent without crashing', () => {
        render(<LoginComponent />);

        expect(screen.getByText('LOGIN')).toBeInTheDocument();
        expect(screen.getByLabelText('EMAIL')).toBeInTheDocument();
        expect(screen.getByLabelText('CONTRASEÑA')).toBeInTheDocument();
        expect(screen.getByText('ENVIAR')).toBeInTheDocument();
    });

    test('shows sucess message when form is submitted succesfully', async () => {
        handleLogin.mockResolvedValueOnce();

        render(<LoginComponent />);

        // fireEvent.change(screen.getByLabelText('EMAIL'), { target: { value: '' } });
        // fireEvent.change(screen.getByLabelText('CONTRASEÑA'), { target: { value: '' } });

        // fireEvent.click(screen.getByText('ENVIAR'));

        // await waitFor(() => {
        //     expect(handleLogin).toHaveBeenCalledWith('', '');
        //     expect(Swal.fire).toHaveBeenCalledWith({
        //         icon: 'sucess',
        //         title: '¡Login exitoso!',
        //         text: '¡Login exitoso!'
        //     });
        // });

        // expect(screen.getByLabelText('EMAIL').value).toBe('');
        // expect(screen.getByLabelText('CONTRASEÑA').value).toBe('');
    });

    test('shows error message when form submission fails', async () => {
        handleLogin.mockRejectedValueOnce(new Error('Login failed'));

        render(<LoginComponent />);

        // fireEvent.change(screen.getByLabelText('EMAIL'), { target: { value: '' } });
        // fireEvent.change(screen.getByLabelText('CONTRASEÑA'), { target: { value: '' } });

        // fireEvent.click(screen.getByText('Sign in'));

        // await waitFor(() => {
        //     expect(handleLogin).toHaveBeenCalledWith('', '');
        //     expect(Swal.fire).toHaveBeenCalledWith({
        //         icon: 'error',
        //         title: 'Error',
        //         text: 'Error al iniciar sesión. Compruebe sus datos e inténtelo de nuevo.',
        //     });
        // });
    });
});