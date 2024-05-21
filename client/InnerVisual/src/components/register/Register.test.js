import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Register from "./Register";

describe('Register Component', () => {
    test('renders all necesary elements for registration', () => {

        render(<Register />);

        expect(screen.getByText('Registro')).toBeInTheDocument();
        expect(screen.getByLabelText('Nombre')).toBeInTheDocument();
        expect(screen.getByLabelText('Apellido')).toBeInTheDocument();
        expect(screen.getByLabelText('Teléfono')).toBeInTheDocument();
        expect(screen.getByLabelText('Foto :')).toBeInTheDocument();
        expect(screen.getByLabelText('Email')).toBeInTheDocument();
        expect(screen.getByLabelText('Password')).toBeInTheDocument();
        expect(screen.getByText('Enviar')).toBeInTheDocument();
    });

});