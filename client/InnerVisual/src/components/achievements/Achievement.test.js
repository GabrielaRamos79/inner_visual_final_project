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

    expect(titles.length).toBe(5);
})

test('renders all achievement icons', () => {
    const { getAllByAltText } = render(<Achievements />);
    const icons = getAllByAltText('icon');

    expect(icons.length).toBe(6);
});
});
// expect(getByText('LOGRO')).ToBeInTheDocument();