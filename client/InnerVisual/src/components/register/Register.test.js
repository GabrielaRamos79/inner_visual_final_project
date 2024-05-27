import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Register from "./Register";

describe('Register Component', () => {
    test('renders all necesary elements for registration', () => {

        render(<Register />);

        expect(screen.getByText('CREA TU CUENTA')).toBeInTheDocument();

        expect(screen.getByPlaceholderText('Introduce tu nombre')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Introduce tu apellido')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Introduce tu teléfono')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Introduce tu email')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Introduce tu contraseña')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Repetir contraseña')).toBeInTheDocument();

        expect(screen.getByText('Foto')).toBeInTheDocument();

        expect(screen.getByLabelText('Acepto los términos y condiciones')).toBeInTheDocument();

        expect(screen.getByRole('button', { name: 'ENVIAR' })).toBeInTheDocument();
    });

});