import React from 'react';
import { render, screen,fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import Achievements from './Achievements';

describe('Achievements component', () => {
    test('renders component without crashing', () => {
        render(<Achievements />);
        expect(screen.getByText('LOGROS')).toBeInTheDocument();
    });

    test('renders all achievement titles', () => {
        render(<Achievements />);

        const titles = screen.getAllByText('LOGRO');

        expect(titles.length).toBe(6);
    });

    test('renders all achievement icons with correct specifity', () => {
        render(<Achievements />);
        const cupIcons = screen.getAllByAltText(/^achievement_cup_/);
        const lockIcons = screen.getAllByAltText(/^achievement_lock_/);

        expect(cupIcons.length).toBe(4);
        expect(lockIcons.length).toBe(2);
    });
});
// expect(getByText('LOGRO')).ToBeInTheDocument();