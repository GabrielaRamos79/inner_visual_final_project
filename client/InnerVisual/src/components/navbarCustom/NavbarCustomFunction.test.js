import React from "react";
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter, Route, Routes } from "react-router-dom";
import userEvent from '@testing-library/user-event';
import NavbarCustom from "./NavbarCustom";
import { UserContext } from "../../context/AuthContext";

const mockUserContex = {
    isLoggedIn: false,
    logout: jest.fn(),
    user: null,
};

describe('NavbarCustom component functionality', () => {
    test('redirects to login when clicking Login link', async () => {
        render(
            <UserContext.Provider value={mockUserContex}>
                <MemoryRouter initialEntries={['/']}>
                    <Routes>
                        <Route path="/" element={<NavbarCustom />} />
                        <Route path="/login" element={<div>Login Page</div>} />
                    </Routes>
                </MemoryRouter>
            </UserContext.Provider>
        );

        const loginLink = screen.getByText('login/registro');
        expect(loginLink).toBeInTheDocument();

        userEvent.click(loginLink);

        await waitFor(() => {
            expect(screen.getByText('Login Page')).toBeInTheDocument();

        });
    });
        
});

