import React from 'react';
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Benefit from './Benefit';

jest.mock('../../assets/img/gallery (1).png', () => 'gallery.png');

describe('Benefit component', () => {
    test('renders component without crashing', () => {
        render(<Benefit />);
        expect(screen.getByText('BENEFICIOS')).toBeInTheDocument();
    });

    test('renders all benefit texts', () => {
        render(<Benefit />);

        expect(screen.getByText(/EL RITUAL ES ESA FORMACIÓN CREADA PARA TI, POR DEPORTISTAS QUE HAN SUFRIDO MENTALMENTE IGUAL QUE TÚ. EN SU INTERIOR ENCONTRARÁS 3 TÉCNICAS DE VISUALIZACIÓN Y MEDITACIÓN QUE TE AYUDARÁN A:/i)).toBeInTheDocument();
        expect(screen.getByText(/ESTAR MÁS CONCENTRADO/i)).toBeInTheDocument();
        expect(screen.getByText(/DESCONECTAR DEL RUIDO INNECESARIO DENTRO DE TU CABEZA/i)).toBeInTheDocument();
        expect(screen.getByText(/TRANSFORMAR TUS MIEDOS/i)).toBeInTheDocument();
        expect(screen.getByText(/DUDAS E INSEGURIDADES/i)).toBeInTheDocument();
        expect(screen.getByText(/EN ENERGIA POSITIVA/i)).toBeInTheDocument();
        expect(screen.getByText(/CONSEGUIR ESA RELAJACIÓN FÍSICA Y MENTAL EN LA COMPETICIÓN QUE TE PERMITA HACER LO QUE TAN BIEN HACÍAS EN LOS ENTRENAMIENTOS/i)).toBeInTheDocument();
        expect(screen.getByText(/Y SOBRE TODO COMENZAR A CONOCERTE MEJOR, MÁS ALLÁ DE OBJETIVOS Y METAS DEPORTIVAS/i)).toBeInTheDocument();
        // const texts = screen.getAllByText(/Lorem ipsum dolor/);
        // expect(texts.length).toBe(3);
    });

    test('renders all benefit image', () => {
        render(<Benefit />);
        const images = screen.getAllByAltText('gallery');
        expect(images.length).toBe(1);
    });
    
});