import React from 'react';
import { render, screen,fireEvent, getAllByAltText } from "@testing-library/react";
import '@testing-library/jest-dom';
import Hero from './Hero';

describe('Hero component', () => {
    test('renders component without crashing', () => {
        const { getByText } = render(<Hero />);

        const welcomeText = getByText((content, element) => {
            const hasText = (element) => element.textContent === 'Welcome';
            const elementHasText = hasText(element);
            const childrenDontHaveText = Array.from(element.children).every(
                (child) => !hasText(child)
            );

            return elementHasText && childrenDontHaveText;
        })

        expect(welcomeText).toBeInTheDocument();
        expect(getByText('to Inner Visuals')).toBeInTheDocument();
        expect(getByText('Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam corporis veritatis natus distinctio, labore cumque quaerat unde, quo vero error autem ipsum sapiente a quas iste est magni, placeat ducimus!')).toBeInTheDocument();
        expect(getByText('Conócenos')).toBeInTheDocument();
    });

});