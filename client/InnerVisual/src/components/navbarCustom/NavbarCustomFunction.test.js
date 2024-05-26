import React from "react";
import { render, screen } from '@testing-library/react';
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
    test('redicts to login when clicking Login link', () => {
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

        expect(screen.getByText('Login Page')).toBeInTheDocument();

    });

    test('logs out and redirects to home when clicking Logout link', () => {
        // mockUserContex.isLoggedIn = true;
        // mockUserContex.user = { role: 'client' };
        render(
            <UserContext.Provider value={mockUserContex}>
                <MemoryRouter initialEntries={['/']}>
                    <Routes>
                        <Route path="/" element={<NavbarCustom />} />
                        <Route path="/login" element={<div>Home Page</div>} />
                    </Routes>
                </MemoryRouter>
            </UserContext.Provider>
        );

        mockUserContex.isLooggedIn = true;

        const logoutLink = screen.getByRole('link',{ name:/logout/i});
        expect(logoutLink).toBeInTheDocument();

        userEvent.click(logoutLink);

        expect(mockUserContex.logout).toHaveBeenCalled();
    });
});