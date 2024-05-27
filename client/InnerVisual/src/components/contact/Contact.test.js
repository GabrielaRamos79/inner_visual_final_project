import React from 'react';
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import Contact from './Contact';

describe('Contact component', () => {
    test('renders Contact component elements', () => {
        render(<Contact />);

        expect(screen.getByText('CONTACTO')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Introduce tu nombre')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Introduce tu apellido')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Introduce tu teléfono')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Introduce tu email')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Escribe tu consulta')).toBeInTheDocument();
        expect(screen.getByText('ENVIAR')).toBeInTheDocument();
    });

    test('displays error message if message is less than 5 characters', async () => {
        render(<Contact />);
        const messageInput = screen.getByPlaceholderText('Escribe tu consulta');
        fireEvent.change(messageInput, { target: { value: 'test' } });
        fireEvent.blur(messageInput);
    });

    test('displays error message if email is invalid', async () => {
        render(<Contact />);
        const emailInput = screen.getByPlaceholderText('Introduce tu email');
        fireEvent.change(emailInput, { target: { value: 'invalidEmail' } });
        fireEvent.blur(emailInput);
    });

    test('displays error message if name is empty', async() => {
        render(<Contact />);
        const nameInput = screen.getByPlaceholderText('Introduce tu nombre');
        fireEvent.blur(nameInput);
    });

    test('displays error message if surname is empty', async() => {
        render(<Contact />);
        const surnameInput = screen.getByPlaceholderText('Introduce tu apellido');
        fireEvent.blur(surnameInput);
    });

    test('displays error message if telephone is invalid', async () => {
        render(<Contact />);
        const telephoneInput = screen.getByPlaceholderText('Introduce tu teléfono');
        fireEvent.change(telephoneInput, { target: { value: '' } });
        fireEvent.blur(telephoneInput);
    });
  
});