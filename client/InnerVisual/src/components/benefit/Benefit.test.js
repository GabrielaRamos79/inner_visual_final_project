import React from 'react';
import { render, screen,fireEvent, getAllByAltText } from "@testing-library/react";
import '@testing-library/jest-dom';
import Benefit from './Benefit';

describe('Benefit component', () => {
    test('renders component without crashing', () => {
        const { getByText } = render(<Benefit />);

        expect(getByText('Beneficios')).toBeInTheDocument();
    });

    test('renders all benefit texts', () => {
        const { getAllByText } = render(<Benefit />);
        const texts = getAllByText(/Lorem ipsum dolor/);

        expect(texts.length).toBe(3);
    });

    test('renders all benefit images', () => {
        const { getAllByAltText } = render(<Benefit />);
        const images = getAllByAltText('mujer sonriente moño recogido');

        expect(images.length).toBe(2);
    });
    
});