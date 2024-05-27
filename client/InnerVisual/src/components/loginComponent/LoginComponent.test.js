import React from 'react';
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import LoginComponent from './LoginComponent';
import { useUserHandler } from '../../handler/AuthHandler';
import Swal from 'sweetalert2';

jest.mock('../../handler/AuthHandler', () => ({
    useUserHandler: jest.fn(),
}));

jest.mock('sweetalert2', () => ({
    fire: jest.fn(),
}));

describe('LoginComponent', () => {
    const handleLogin = jest.fn();

    beforeEach(() => {
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
    });

    test('shows error message when form submission fails', async () => {
        handleLogin.mockRejectedValueOnce(new Error('Login failed'));

        render(<LoginComponent />);
    });
});