import React from 'react';
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Team from './Team';
import Kike from '../../assets/img/Kike.png';
import Juan from '../../assets/img/juan.jpg';

describe('Team Component', () => {
    test('render Team component without crashing', () => {
        render(<Team />);

        expect(screen.getByText('Kike Mayordomo')).toBeInTheDocument();
        expect(screen.getByText('Juan Cruz')).toBeInTheDocument();

        expect(screen.getByText(/"Si quieres cambiar algo, hazlo desde dentro" Kike se lo tomó al pie de la letra y creó Inner Visuals, un proyecto para aportar un cambio positivo a la sociedad a través del deporte. Pasó varios años viviendo y entrenando en China, donde aprendió sobre meditación, chikung, artes marciales… y ahora se dedica al entrenamiento de deportistas a través de estas técnicas de arraigo oriental./)).toBeInTheDocument();
        expect(screen.getByText(/Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum./)).toBeInTheDocument();

        const kikeImage = screen.getByAltText('Miembro 1');
        const juanImage = screen.getByAltText('Miembro 2');

        expect(kikeImage).toHaveAttribute('src', Kike.toString());
        expect(juanImage).toHaveAttribute('src', Juan.toString());
    });
});

