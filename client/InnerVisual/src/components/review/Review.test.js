import React from 'react';
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Review from './Review';

jest.mock('../../assets/img/review1.jpg', () => 'review1.jpg');
jest.mock('../../assets/img/review2.jpg', () => 'review2.jpg');
jest.mock('../../assets/img/review3.jpg', () => 'review3.jpg');
jest.mock('../../assets/img/review4.jpg', () => 'review4.jpg');
jest.mock('../../assets/img/review5.jpg', () => 'review5.jpg');
jest.mock('../../assets/img/review6.jpg', () => 'review6.jpg');

test('renders Review component without crashing', () => {
    render(<Review />);

    expect(screen.getByText('Dicen de nosotros')).toBeInTheDocument();

    const luciaReview = screen.getByAltText('mujer sonriente moño recogido').parentElement;
    expect(luciaReview).toHaveTextContent('Lucia Gil');
    expect(luciaReview).toHaveTextContent('Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis at officiis quos dolorem debitis quam aliquid voluptas es sint');

    const raulReview = screen.getByAltText('hombre sonriente pelo rizado').parentElement;
    expect(raulReview).toHaveTextContent('Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis at officiis quos dolorem debitis quam aliquid voluptas es sint');

    const mariaReview = screen.getByAltText('mujer sonriente pelirroja').parentElement;
    expect(mariaReview).toHaveTextContent('María Hernández');
    expect(mariaReview).toHaveTextContent('Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis at officiis quos dolorem debitis quam aliquid voluptas es sint');

    const gabrielaRewiew = screen.getByAltText('mujer con gafas pasta negra, pelo largo liso').parentElement;
    expect(gabrielaRewiew).toHaveTextContent('Gabriela Ramos');
    expect(gabrielaRewiew).toHaveTextContent('Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis at officiis quos dolorem debitis quam aliquid voluptas es sint');

    const javierReview = screen.getByAltText('hombre moreno con barba').parentElement;
    expect(javierReview).toHaveTextContent('Javier Escudero');
    expect(javierReview).toHaveTextContent('Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis at officiis quos dolorem debitis quam aliquid voluptas es sint');

    const gonzaloReview = screen.getByAltText('hombre sonriente barbudo pelirrojo').parentElement;
    expect(gonzaloReview).toHaveTextContent('Gonzalo Parra');
    expect(gonzaloReview).toHaveTextContent('Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis at officiis quos dolorem debitis quam aliquid voluptas es sint');
});