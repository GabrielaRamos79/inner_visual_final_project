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

    expect(screen.getByText('reseñas')).toBeInTheDocument();

    const aitorReview = screen.getByAltText('hombre moreno con barba').parentElement;
    expect(aitorReview).toHaveTextContent('Aitor');
    expect(aitorReview).toHaveTextContent('Martínez');
    expect(aitorReview).toHaveTextContent('En el último simulacro de competición que hice con la selección quedé primero en las prueba de boulder, y');
    expect(aitorReview).toHaveTextContent('uno de los pocos en hacer las vías más duras.')
    expect(aitorReview).toHaveTextContent('Siento una mejora en la concentración, precisión y técnica')

    const franReview = screen.getByAltText('hombre sonriente pelo rizado').parentElement;
    expect(franReview).toHaveTextContent('Fran');
    expect(franReview).toHaveTextContent('Quesada');
    expect(franReview).toHaveTextContent('La apnea es un deporte con un componente mental crucial.');
    expect(franReview).toHaveTextContent('Gracias a inner visuals, he aprendido a controlar mis nervios,');
    expect(franReview).toHaveTextContent('batiendo mi récord de profundidad y tres récords nacionales.');
    expect(franReview).toHaveTextContent('Además, ahora disfruto de las competiciones.');

    const barbaraReview = screen.getByAltText('mujer sonriente pelirroja').parentElement;
    expect(barbaraReview).toHaveTextContent('Bárbara');
    expect(barbaraReview).toHaveTextContent('Bergbauer');
    expect(barbaraReview).toHaveTextContent('Noté una enorme diferencia en mi capacidad para estar presente y');
    expect(barbaraReview).toHaveTextContent('no dejar que la frustración o el cansancio me superaran en momentos clave.');
    expect(barbaraReview).toHaveTextContent('Seguiré trabajando esta parte de mí misma y');
    expect(barbaraReview).toHaveTextContent(' estoy seguro de que lograré mejores resultados.');

    const gabrielaRewiew = screen.getByAltText('mujer con gafas pasta negra, pelo largo liso').parentElement;
    expect(gabrielaRewiew).toHaveTextContent('Gabriela');
    expect(gabrielaRewiew).toHaveTextContent('Ramos');
    expect(gabrielaRewiew).toHaveTextContent('Lorem ipsum dolor sit,');
    expect(gabrielaRewiew).toHaveTextContent('amet consectetur adipisicing elit.');
    expect(gabrielaRewiew).toHaveTextContent('Perferendis at officiis quos dolorem debitis quam aliquid voluptas es sint');

    const anaReview = screen.getByAltText('mujer sonriente moño recogido').parentElement;
    expect(anaReview).toHaveTextContent('ana');
    expect(anaReview).toHaveTextContent('lucena');
    expect(anaReview).toHaveTextContent('Lorem ipsum dolor sit,');
    expect(anaReview).toHaveTextContent('amet consectetur adipisicing elit.');
    expect(anaReview).toHaveTextContent('Perferendis at officiis quos dolorem debitis quam aliquid voluptas es sint');

    const gonzaloReview = screen.getByAltText('hombre sonriente barbudo pelirrojo').parentElement;
    expect(gonzaloReview).toHaveTextContent('Gonzalo');
    expect(gonzaloReview).toHaveTextContent('Parra');
    expect(gonzaloReview).toHaveTextContent('Lorem ipsum dolor sit,');
    expect(gonzaloReview).toHaveTextContent('amet consectetur adipisicing elit.');
    expect(gonzaloReview).toHaveTextContent('Perferendis at officiis quos dolorem debitis quam aliquid voluptas es sint');
});