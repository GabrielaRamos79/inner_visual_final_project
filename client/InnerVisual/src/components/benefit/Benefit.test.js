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
        const texts = screen.getAllByText(/Lorem ipsum dolor/);
        expect(texts.length).toBe(3);
    });

    test('renders all benefit image', () => {
        render(<Benefit />);
        const images = screen.getAllByAltText('gallery');
        expect(images.length).toBe(1);
    });
    
});