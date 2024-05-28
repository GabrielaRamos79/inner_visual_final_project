import React from 'react';
import { render, screen,fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import Achievements from './Achievements';

describe('Achievements component', () => {
    test('renders component without crashing', () => {
        const { getByText } = render(<Achievements />);

        expect(getByText('LOGROS')).toBeInTheDocument();
    });

test('renders all achievement titles', () => {
    const { queryAllByText } =render(<Achievements />);
    const titles =queryAllByText('LOGRO');

    expect(titles.length).toBe(6);
})

test('renders all achievement icons with correct specifity', () => {
    const { getAllByAltText } = render(<Achievements />);
    const cupIcons = getAllByAltText('icon').filter(icon => icon.src.includes('achievement_cup'));
    const lockIcons = getAllByAltText('icon').filter(icon => icon.src.includes('achievement_lock'));

    expect(cupIcons.length).toBe(4);
    expect(lockIcons.length).toBe(2);
});
});
// expect(getByText('LOGRO')).ToBeInTheDocument();