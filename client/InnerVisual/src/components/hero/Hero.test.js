import React from 'react';
import { render, screen,fireEvent, getAllByAltText } from "@testing-library/react";
import '@testing-library/jest-dom';
import Hero from './Hero';

describe('Hero component', () => {
    test('renders component without crashing', () => {
        const { getByText } = render(<Hero />);

        const welcomeText = getByText(/Welcome/);
        const toInnerVisualsText = getByText(/to Inner Visuals/);  
            
        expect(welcomeText).toBeInTheDocument();
        expect(toInnerVisualsText).toBeInTheDocument();
        expect(getByText('Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam corporis veritatis natus distinctio, labore cumque quaerat unde, quo vero error autem ipsum sapiente a quas iste est magni, placeat ducimus!')).toBeInTheDocument();
        expect(getByText('Conócenos')).toBeInTheDocument();
    });

});