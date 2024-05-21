import React from 'react';
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import Jobs from './Jobs';

test('renders Jobs component without crashing', () => {
    // const { getByText, getByLabelText } = 
    render(<Jobs />);

    expect(screen.getByText(/quieres trabajar con Nosotros/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Correo Electrónico:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Nombre:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Apellido:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Teléfono:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Mensaje:/i)).toBeInTheDocument();
    expect(screen.getByText(/Enviar Mensaje/i)).toBeInTheDocument();
});
