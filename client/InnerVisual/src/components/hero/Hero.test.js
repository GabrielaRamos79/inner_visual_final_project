import React from 'react';
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Hero from './Hero';

describe('Hero component', () => {
    test('renders component without crashing', () => {
        render(
            <MemoryRouter>
                <Hero />
            </MemoryRouter>);

        const title1 = screen.getByText('Entrena tu mente');
        expect(title1).toBeInTheDocument();

        const title2 = screen.getByText('Marca la diferencia');
        expect(title2).toBeInTheDocument();
            
        const button = screen.getByText('Conócenos');
        expect(button).toBeInTheDocument();
    });

});