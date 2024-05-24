import React from 'react';
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Team from './Team';
import Kike from '../../assets/img/Kike.png';
import Juan from '../../assets/img/juan.jpg';

describe('Team Component', () => {
    test('render Team component without crashing', () => {
        render(<Team />);

        expect(screen.getByText('Kike')).toBeInTheDocument();
        expect(screen.getByText('Juan')).toBeInTheDocument();

        expect(screen.getByText(/Si quieres cambiar algo, hazlo desde dentro/)).toBeInTheDocument();
        expect(screen.getByText(/Breve descripción del miembro 2/)).toBeInTheDocument();

        const kikeImage = screen.getByAltText('Miembro 1');
        const juanImage = screen.getByAltText('Miembro 2');

        expect(kikeImage).toHaveAttribute('src', Kike.toString());
        expect(juanImage).toHaveAttribute('src', Juan.toString());
    });
});

