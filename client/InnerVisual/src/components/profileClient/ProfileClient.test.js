import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import ProfileClient from './ProfileClient';
import fotoperfil from '../../assets/img/fotoperfil.jpg';

jest.mock('../../assets/img/fotoperfil.jpg', () => 'fotoperfil.jpg');

test('renders ProfileClient component without crashing', () => {
    render(<ProfileClient />);

    expect(screen.getByText((content, element) => content.startsWith('Bienvenido, '))).toBeInTheDocument();
    expect(screen.getByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in nisl fringilla, at ultricies libero aliquet.')).toBeInTheDocument();
    expect(screen.getByText('Continuar Prácticas')).toBeInTheDocument();
    expect(screen.getByText('Notas')).toBeInTheDocument();
    expect(screen.getByText('Eliminar')).toBeInTheDocument();
    expect(screen.getByText('Perfil de cliente')).toBeInTheDocument();

    const profilePicture = screen.getByAltText('Foto del Cliente');
    expect(profilePicture).toHaveAttribute('src', 'fotoperfil.jpg');
});

test('buttons trigger the correct functions when clicked', () => {
    console.log = jest.fn();

    render(<ProfileClient />);

    fireEvent.click(screen.getByText('Continuar Prácticas'));
    expect(console.log).toHaveBeenCalledWith('Continuar Prácticas');

    fireEvent.click(screen.getByText('Notas'));
    expect(console.log).toHaveBeenCalledWith('Notas');

    fireEvent.click(screen.getByText('Eliminar'));
    expect(console.log).toHaveBeenCalledWith('Eliminar');
});

