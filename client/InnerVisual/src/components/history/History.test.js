import React from 'react';
import { render, screen, fireEvent, getAllByAltText, getByText, waitFor, getByAltText } from "@testing-library/react";
import '@testing-library/jest-dom';
import History from './History';

describe('History component', () => {
    test('renders component without crashing', () => {
        const { getByText, getByAltText } = render(<History />);

        expect(getByText('Nos importa tu salud')).toBeInTheDocument();
        expect(getByText('Tratamiento individual')).toBeInTheDocument();
        expect(getByText('Estamos para atenderte')).toBeInTheDocument();

        expect(getByAltText('Terapeuta con niña paciente')).toBeInTheDocument();
        expect(getByAltText('Terapeuta ayudando a mujer')).toBeInTheDocument();
        expect(getByAltText('Terapeuta haciendo ejercicio de rehabilitacion')).toBeInTheDocument();
    });
});