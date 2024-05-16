import React from 'react';
import { render, screen, fireEvent, getAllByAltText, getByText, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import Contact from './Contact';

describe('Contact component', () => {
    const { getByText, getByLabelText } = render(<Contact />);

    expect(getByText('Contacta con Nosotros')).toBeInTheDocument();
    expect(getByLabelText('Correo Electrónico:')).toBeInTheDocument();
    expect(getByLabelText('Nombre:')).toBeInTheDocument();
    expect(getByLabelText('Apellido:')).toBeInTheDocument();
    expect(getByLabelText('Teléfono:')).toBeInTheDocument();
    expect(getByLabelText('Mensaje:')).toBeInTheDocument();
    expect(getByText('Enviar Mensaje')).toBeInTheDocument();
});

test('displays error message if message is less than 5 characters', async () => {
    const { getByText, getByLabelText } = render(<Contact />);
    const messageInput = getByLabelText('Mensaje:');
    fireEvent.change(messageInput, { target: { value: 'test' } });
    fireEvent.blur(messageInput);
    await waitFor(() => {
        expect(getByText('El mensaje debe tener al menos 5 caracteres.')).toBeInTheDocument();
    });
});