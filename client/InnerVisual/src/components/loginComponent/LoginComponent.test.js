import React from 'react';
import { render, screen, fireEvent, getAllByAltText, getByText, waitFor, getByAltText } from "@testing-library/react";
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import LoginComponent from './LoginComponent';

describe('LoginComponent', () => {
    it('renders the login form correctly', () => {
        render(<LoginComponent />);
        
        expect(screen.getByText(/Login/i)).toBeInTheDocument();

        expect(screen.getByLabelText(/Emmail address/i)).toBeInTheDocument();

        expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();

        expect(screen.getByRole('button', { name: /Sign in/i })).toBeInTheDocument();
    });

    it('handles form submission', async () => {
        render(<LoginComponent />);

        userEvent.type(screen.getByLabelText(/Email address/i), 'test@example.coom');

        userEvent.type(screen.getByLabelText(/Password/i), 'password123');

        const submitButton = screen.getByRole('button', { name: /Sign in/i });
        userEvent.click(submitButton);
    });
});

// describe('LoginComponent', () => {
//     it('renders without crashing', () => {
//         const { getByText } = render(<LoginComponent />);
//         const loginTitle = getByText('Login');
//         expect(loginTitle).toBeInTheDocument();
//     });

//     it('updates email and password fields when typed', async () => {
//         const { getByLabelText } = render(<LoginComponent />);
//         const emailInput = getByLabelText('Email address');
//         const passwordInput = getByLabelText('Password');

//         fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
//         fireEvent.change(passwordInput, { target: { value: 'password123' } });

//         expect(emailInput.value).toBe('test@example.com');
//         expect(passwordInput.value).toBe('password123');
//     });

//     it('submits form when Sign in button is clicked', async () => {
//         const handleLoginMock = jest.fn();
//         const { getByText, getByLabelText } = render(<LoginComponent handleLogin={handleLoginMock} />);
//         const emailInput = getByLabelText('Email address');
//         const passwordInput = getByLabelText('Password');
//         const signInButton = getByText('Sign in');

//         fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
//         fireEvent.change(passwordInput, { target: { value: 'password123' } });
//         fireEvent.click(signInButton);

//         await waitFor(() => {
//             expect(handleLoginMock).toHaveBeenCalledWith('test@example.com', 'password123');
//         });
//     });
// });