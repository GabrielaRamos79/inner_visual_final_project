import React from 'react';
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Usp from './Usp';

test('renders Usp component without crashing', () => {
    render(<Usp />);

    expect(screen.getByText('¿Qué es Inner Visuals?')).toBeInTheDocument();
    expect(screen.getByText('¿Qué beneficios aporta a mi práctica deportiva (profesional)?')).toBeInTheDocument();

    expect(screen.getByAltText('atleta mujer inner flow')).toBeInTheDocument();
    expect(screen.getByAltText('deportista sentada junto a pesas y botella agua')).toBeInTheDocument();

    const buttons = screen.getAllByText('Click aquí');
    expect(buttons).toHaveLength(2);
    buttons.forEach(button => {
        expect(button).toBeInTheDocument();
    });
});