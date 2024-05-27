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

    test('video has controls', () => {
        render(<IntroCourse />);

        const videoElement = screen.getByRole('button', { name: /VISUALIZACIÓN 1 - INTRODUCCIÓN A LA MEDITACIÓN/i });
        expect(videoElement).toHaveAttribute('controls');
    });

});