import React from 'react';
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import Contact from './Contact';

describe('Contact component', () => {
    test('renders Contact component elements', () => {
        render(<Contact />);

        expect(screen.getByText('CONTACTO')).toBeInTheDocument();
        expect(screen.getByLabelText('Nombre')).toBeInTheDocument();
        expect(screen.getByLabelText('Apellido')).toBeInTheDocument();
        expect(screen.getByLabelText('Teléfono')).toBeInTheDocument();
        expect(screen.getByLabelText('Correo Electrónico')).toBeInTheDocument();
        expect(screen.getByLabelText('Mensaje')).toBeInTheDocument();
        expect(screen.getByText('Enviar Mensaje')).toBeInTheDocument();
    });

    test('displays error message if message is less than 5 characters', async () => {
        render(<Contact />);
        const messageInput = screen.getByLabelText('Mensaje');
        fireEvent.change(messageInput, { target: { value: 'test' } });
        fireEvent.blur(messageInput); 
    });

    test('displays error message if email is invalid', async () => {
        render(<Contact />);
        const emailInput = screen.getByLabelText('Correo Electrónico');
        fireEvent.change(emailInput, { target: { value: 'invalidEmail' } });
        fireEvent.blur(emailInput);
    });

    test('displays error message if name is empty', async() => {
        render(<Contact />);
        const nameInput = screen.getByLabelText('Nombre');
        fireEvent.blur(nameInput);
    });

    test('displays error essage if surname is empty', async() => {
        render(<Contact />);
        const surnameInput = screen.getByLabelText('Apellido');
        fireEvent.blur(surnameInput);
    });

    test('displays error message if telephone is invalid', async () => {
        render(<Contact />);
        const telephoneInput = screen.getByLabelText('Teléfono');
        fireEvent.blur(telephoneInput);
    });
    
});