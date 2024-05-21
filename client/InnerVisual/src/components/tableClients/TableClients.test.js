import React from 'react';
import { render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import TableClients from './TableClients';
import { UserHandler } from '../../handler/UserHandler';

jest.mock('../../handler/UserHandler', () => ({
    UserHandler: {
        getUser: jest.fn()
    }
}));

describe('TableClients Component', () => {
    beforeEach(() => {
        UserHandler.getUser.mockResolvedValue([
            { id_user: 1, name: 'John', surname: 'Doe', email: 'john@gmail.com', phone: '123456789'},
            { id_user: 2, name: 'Jane', surname: 'Smith', email: 'jane@gmail.com', phone: '987456321'},
        ]);
    });

    test('renders TableClients component without crashing', async () => {
        render(<TableClients />);

        expect(screen.getByText('Lista de clientes')).toBeInTheDocument();

        await waitFor(() => {
            expect(screen.getByText('John')).toBeInTheDocument();
            expect(screen.getByText('Doe')).toBeInTheDocument();
            expect(screen.getByText('john@gmail.com')).toBeInTheDocument();
            expect(screen.getByText('123456789')).toBeInTheDocument();
            expect(screen.getByText('Jane')).toBeInTheDocument();
            expect(screen.getByText('Smith')).toBeInTheDocument();
            expect(screen.getByText('jane@gmail.com')).toBeInTheDocument();
            expect(screen.getByText('987456321')).toBeInTheDocument();
        });
    });
});

