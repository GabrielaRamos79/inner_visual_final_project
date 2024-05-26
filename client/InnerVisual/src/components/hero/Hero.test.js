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

        const welcomeText = screen.getByText('Welcome to');
        expect(welcomeText).toBeInTheDocument();

        const innerVisualsText = screen.getByText('Inner Visuals');
        expect(innerVisualsText).toBeInTheDocument();
            
        const button = screen.getByText('Conócenos');
        expect(button).toBeInTheDocument();
    });

});