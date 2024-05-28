import React from 'react';
import { render, screen,fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import IntroCourse from './IntroCourse';

describe('IntroCourse component', () => {
    test('renders IntroCourse component without crashing', () => {
        render(<IntroCourse />);
    
        expect(screen.getByText('INTRO')).toBeInTheDocument();
        expect(screen.getByText('VISUALIZACIÓN 1 - INTRODUCCIÓN A LA MEDITACIÓN')).toBeInTheDocument();
        expect(screen.getByText('VISUALIZACIÓN 2 - INTRODUCCIÓN A LA MEDITACIÓN DE PIE')).toBeInTheDocument();
    });

    test('video are clickable', () => {
        render(<IntroCourse />);

        const firstVideoButton = screen.getByRole('button', { name: /VISUALIZACIÓN 1 - INTRODUCCIÓN A LA MEDITACIÓN/i });
        const secondVideoButton = screen.getByRole('button', { name: /VISUALIZACIÓN 2 - INTRODUCCIÓN A LA MEDITACIÓN DE PIE/i});

        fireEvent.click(firstVideoButton);
        expect(screen.getByText(/playing/i)).toBeInTheDocument();

        fireEvent.click(secondVideoButton);
        expect(screen.getByText(/playing/i)).toBeInTheDocument();
    });

});