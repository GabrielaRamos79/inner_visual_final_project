import React from 'react';
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import FooterCustom from './FooterCustom';

describe('FooterCustom component', () => {
    test('renders component without crashing',() => {
        render(
            <MemoryRouter>
                <FooterCustom />
            </MemoryRouter>
        );

        expect(screen.getByAltText('logo InnerVisual')).toBeInTheDocument();
        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('About us')).toBeInTheDocument();
        expect(screen.getByText('Contacto')).toBeInTheDocument();
        expect(screen.getByText('Política de privacidad')).toBeInTheDocument();
        expect(screen.getByText('Política de cookies')).toBeInTheDocument();
        expect(screen.getByText('Aviso legal')).toBeInTheDocument();
    });

    test('renders all social media icons', () => {
        render(
            <MemoryRouter>
                <FooterCustom />
            </MemoryRouter>
        );
        
        expect(screen.getByAltText('logo de facebook')).toBeInTheDocument();
        expect(screen.getByAltText('logo de instagram')).toBeInTheDocument();
        expect(screen.getByAltText('logo de linkedin')).toBeInTheDocument();
        expect(screen.getByAltText('logo de whatsapp')).toBeInTheDocument();
    });

    test('links to correct social media urls', () => {
        render(
            <MemoryRouter>
                <FooterCustom />
            </MemoryRouter>
        );
        
        expect(screen.getByRole('link', { name: /facebook/i })).toHaveAttribute('href', 'https://www.facebook.com');
        expect(screen.getByRole('link', { name: /instagram/i })).toHaveAttribute('href', 'https://www.instagram.com');
        expect(screen.getByRole('link', { name: /linkedin/i })).toHaveAttribute('href', 'https://www.linkedin.com');
        expect(screen.getByRole('link', { name: /whatsapp/i })).toHaveAttribute('href', 'https://www.whatsapp.com');    
    });
});
