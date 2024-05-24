import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "../../context/AuthContext";
import NavbarCustom from "./NavbarCustom";

const mockUserContext = {
    isLoggedIn: false,
    logout: jest.fn(),
    user: {},
};

test('renders NavbarCustom component without crashing', () => {

    render(
        <UserContext.Provider value={mockUserContext}>
            <MemoryRouter initialEntries={['/login']}> {}
                <Routes>
                    <Route path='/login' element={<NavbarCustom />} /> {}
                </Routes>
            </MemoryRouter>
        </UserContext.Provider>
    );

    if (mockUserContext.isLoggedIn) {
        expect(screen.getByText('Área Personal')).toBeInTheDocument();
        expect(screen.getByText('Logout')).toBeInTheDocument();
        } else {
            expect(screen.findByText('Login')).resolves.toBeInTheDocument();
    }
});
