import React from 'react';
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Usp from './Usp';

test('renders Usp component without crashing', () => {
    render(<Usp />);

    expect(screen.getByText('EL RITUAL')).toBeInTheDocument();
    expect(screen.getByText('NO ERES EL ÚNICO/A')).toBeInTheDocument();

    document.body.innerHTML = '<div id="root"></div>';
    render(<Usp />, { container: document.getElementById('root') });


    function searchForTextInDOM(text) {
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        let node;
        while ((node = walker.nextNode())) {
            if (node.nodeValue.includes(text)) {
                return true;
            }
    }
    return false;
}

    expect(searchForTextInDOM('ESA ES LA RAZÓN POR LA QUE CREAMOS EL')).toBeTruthy();
    expect(searchForTextInDOM('RITUAL')).toBeTruthy();


   
    expect(screen.getByAltText('swimming guy')).toBeInTheDocument();
    expect(screen.getByAltText('jumping biker')).toBeInTheDocument();

    // const buttons = screen.getAllByText('Click aquí');
    // expect(buttons).toHaveLength(2);
    // buttons.forEach(button => {
    //     expect(button).toBeInTheDocument();
    // });
});