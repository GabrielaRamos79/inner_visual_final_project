import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import Jobs from './Jobs';

describe('Jobs component', () => {
    test('renders Jobs component elements', () => {
        render(<Jobs />);

        expect(screen.getByText('TRABAJA CON NOSOTROS')).toBeInTheDocument();
        expect(screen.getByText('NOMBRE')).toBeInTheDocument();
        expect(screen.getByText('TELÉFONO')).toBeInTheDocument();
        expect(screen.getByText('EMAIL')).toBeInTheDocument();
        expect(screen.getByText('ENVIAR')).toBeInTheDocument();
    });

    // test('displays error message if name is empty', async () => {
    //     render(<Jobs />);
    //     // const messageInput = screen.getByLabelText('Mensaje');
    //     fireEvent.blur(screen.getByPlaceholderText('Introduce tu nombre'));
    //     fireEvent.click(screen.getByText('ENVIAR'));
    //     expect(screen.getByText('El nombre es obligatorio.')).toBeInTheDocument();
    // });

    // test('displays error message if surname is empty', async () => {
    //     render(<Jobs />);
    //     fireEvent.blur(screen.getByPlaceholderText('Introduce tu apellido'));
    //     fireEvent.click(screen.getByText('ENVIAR'));
    //     expect(screen.getByText('El apellido es obligatorio.')).toBeInTheDocument();
    // });

    // test('displays error message if telephone is invalid', async () => {
    //     render(<Jobs />);
    //     const telephoneInput = screen.getByPlaceholderText('Introduce tu teléfono');
    //     fireEvent.change(telephoneInput, { target: { value: '' } });
    //     fireEvent.blur(telephoneInput);
    //     fireEvent.click(screen.getByText('ENVIAR'));
    //     expect(screen.getByText('Introduce un teléfono válido.')).toBeInTheDocument();
    // });

    // test('displays error message if email is invalid', async () => {
    //     render(<Jobs />);
    //     const emailInput = screen.getByPlaceholderText('Introduce tu correo electrónico');
    //     fireEvent.change(emailInput,  {target: { value: 'invalid-email'} });
    //     fireEvent.blur(emailInput);
    //     fireEvent.click(screen.getByText('ENVIAR'));
    //     expect(screen.getByText('Introduce un email válido.')).toBeInTheDocument();
    // });

    // test('displays error message if message is less than 5 characters', async () => {
    //     render(<Jobs />);
    //     const messageInput = screen.getByPlaceholderText('Introduce tu consulta');
    //     fireEvent.change(messageInput, { target: { value: 'test' } });
    //     fireEvent.blur(messageInput);
    //     fireEvent.click(screen.getByText('ENVIAR'));
    //     expect(screen.getByText('El mensaje debe tener al menos 5 caracteres.')).toBeInTheDocument();
    // });

    // test('displays error message if terms are not accepted', async () => {
    //     render(<Jobs />);
    //     fireEvent.click(screen.getByText('ENVIAR'));
    //     const errorMessageElement = screen.getByTestId('error-message');
    //     expect(errorMessageElement.textContent).toBe('Debes aceptar el tratamiento de datos.');
        // expect(screen.getByText((content, element) => {
        //     return element.textContent === 'Debes aceptar el tratamiento de datos.' &&
        //     element.tagName.toLowerCase() === 'div';
        //     })).toBeInTheDocument();
    // });
});
