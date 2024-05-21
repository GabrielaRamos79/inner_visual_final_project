import React from 'react';
import { render, screen,fireEvent, getAllByAltText } from "@testing-library/react";
import '@testing-library/jest-dom';
import FooterCustom from './FooterCustom';

describe('FooterCustom component', () => {
    test('renders component without crashing',() => {
        const { getByText } = render(<FooterCustom />);

        expect(getByText('Inner Visuals Copyright ©2024 | Todos los derechos reservados')).toBeInTheDocument();
        expect (getByText('Aviso Legal - Política de Cookies - Política de Privacidad')).toBeInTheDocument();

    });

    test('renders all social media icons', () => {
        const { getAllByAltText } = render(<FooterCustom />);
        const icons = getAllByAltText(/logo de/);
    
        expect(icons.length).toBe(3);
    });

    test('links to correct social media urls', () => {
        const { container } = render (<FooterCustom />);
        const facebookLink = container.querySelector('a[href="https://www.facebook.com"]');
        const instagramLink = container.querySelector('a[href="https://www.instagram.com"]');
        const linkedinLink = container.querySelector('a[href="https://www.linkedin.com"]');
    
        expect(facebookLink).toBeInTheDocument();
        expect(instagramLink).toBeInTheDocument();
        expect(linkedinLink).toBeInTheDocument();
    });
    
});
