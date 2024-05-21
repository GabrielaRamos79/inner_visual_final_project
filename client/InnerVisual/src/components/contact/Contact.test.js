import React from 'react';
import { render, screen, fireEvent, getAllByAltText, getByText, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import Contact from './Contact';

describe('Contact component', () => {
    test('renders Contact component elements', () => {
        render(<Contact />);

        expect(screen.getByText('¿Quieres mas información? Contacta con Nosotros')).toBeInTheDocument();
        expect(screen.getByLabelText('Correo Electrónico:')).toBeInTheDocument();
        expect(screen.getByLabelText('Nombre:')).toBeInTheDocument();
        expect(screen.getByLabelText('Apellido:')).toBeInTheDocument();
        expect(screen.getByLabelText('Teléfono:')).toBeInTheDocument();
        expect(screen.getByLabelText('Mensaje:')).toBeInTheDocument();
        expect(screen.getByText('Enviar Mensaje')).toBeInTheDocument();
    });

    // test('displays error message if message is less than 5 characters', async () => {
    //     render(<Contact />);
    //     const messageInput = screen.getByLabelText('Mensaje:');
    //     fireEvent.change(messageInput, { target: { value: 'test' } });
    //     fireEvent.blur(messageInput);
    //     await waitFor(() => {
    //         expect(screen.getByText('El mensaje debe tener al menos 5 caracteres.')).toBeInTheDocument();
    //     });
    // // const { getByText, getByLabelText } = render(<Contact />);   
    // });
});