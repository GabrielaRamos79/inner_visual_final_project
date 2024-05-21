import React from 'react';
import { render, screen, fireEvent, getAllByAltText, getByText, waitFor, getByAltText } from "@testing-library/react";
import '@testing-library/jest-dom';
import IntroCourse from './IntroCourse';

test('renders IntroCourse component without crashing', () => {
    const { getByText } = render(<IntroCourse />);

    expect(getByText('INTRO')).toBeInTheDocument();
    expect(getByText('VÍDEO 1')).toBeInTheDocument();
    expect(getByText('VIZUALIZACIÓN 1 - INTRO')).toBeInTheDocument();
    expect(getByText('VÍDEO 2')).toBeInTheDocument();
    expect(getByText('MÉTODO 1 - INTRO')).toBeInTheDocument();
});