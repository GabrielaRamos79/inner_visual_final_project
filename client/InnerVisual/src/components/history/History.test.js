import React from 'react';
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import History from './History';

describe('History component', () => {
    test('renders component without crashing', () => {
        render(<History />);

        expect(screen.getByText('BREVE HISTORIA')).toBeInTheDocument();
        expect(screen.getByText('TRATAMIENTO INDIVIDUAL')).toBeInTheDocument();
        expect(screen.getByText('SI QUIERES CAMBIAR HAZLO DESDE DENTRO')).toBeInTheDocument();

        expect(screen.getByAltText('Deportista haciendo plancha lateral')).toBeInTheDocument();
        expect(screen.getByAltText('Nadador')).toBeInTheDocument();
        expect(screen.getByAltText('Hombre haciendo Motocross')).toBeInTheDocument();
    });
});