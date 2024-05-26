import React from 'react';
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import Jobs from './Jobs';

describe('Jobs component', () => {
    test('renders Jobs component elements', () => {
        render(<Jobs />);

        expect(screen.getByText('WORK WITH US')).toBeInTheDocument();
        expect(screen.getByLabelText('Nombre')).toBeInTheDocument();
        expect(screen.getByLabelText('Correo Electrónico')).toBeInTheDocument();
        expect(screen.getByLabelText('Mensaje')).toBeInTheDocument();
        expect(screen.getByText('Enviar Mensaje')).toBeInTheDocument();
    });

    test('displays error message if message is less than 5 characters', async () => {
        render(<Jobs />);
        const messageInput = screen.getByLabelText('Mensaje');
        fireEvent.change(messageInput,  {target: { value: 'test'} });
        fireEvent.blur(messageInput);
    });

    test('displays error message if email is invalid', async () => {
        render(<Jobs />);
        const emailInput = screen.getByLabelText('Correo Electrónico');
        fireEvent.change(emailInput,  {target: { value: 'invalid-email'} });
        fireEvent.blur(emailInput);
    });

    test('displays error message if surname is empty', async () => {
        render(<Jobs />);
    });

    test('displays error message if telephone is invalid', async () => {
        render(<Jobs />);
    });
});
