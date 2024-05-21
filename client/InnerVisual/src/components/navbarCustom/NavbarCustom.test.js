import React from 'react';
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import NavbarCustom from './NavbarCustom';

test('renders NavbarCustom component without crashing', () => {
    render(<NavbarCustom />);

    expect(screen.getByText('Inner-Visuals')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Cursos')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Área Personal')).toBeInTheDocument();
    expect(screen.getByText('Login/Registro')).toBeInTheDocument();
});