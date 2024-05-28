import React from 'react';
import { render, screen, fireEvent, waitFor, wrapRootElement } from "@testing-library/react";
import '@testing-library/jest-dom';
import ProfileClient from './ProfileClient';
import { VideoContext  } from '../../context/VideoContext';
import { UserContext } from '../../context/AuthContext';
// import fotoperfil from '../../assets/img/fotoperfil.jpg';

const mockUser = {
    id_user: '123',
    name: 'Test User',
    photo: 'test-photo-url',
};

const mockProgress = {
    level1: 50,
    level2: 30,
    level3: 70,
};

// jest.mock('../../assets/img/fotoperfil.jpg', () => 'fotoperfil.jpg');
// describe('ProfileClient component', () => {
//     beforeEach(() => {
//         render(
//             <ProfileClient />,
//             {
//                 wrapper: ({ children }) => (
//                     <UserContext.Provider value={mockUser}>
//                         <VideoContext.Provider value={mockProgress}>
//                             {children}
//                         </VideoContext.Provider>
//                     </UserContext.Provider>
//                 )
//             }
//         );
//     });

    // it('handles delete operation correctly', async () => {
    //     const deleteButton = screen.getByText(button => button.textContent === 'Eliminar');
    //     fireEvent.click(deleteButton);
    
        // await waitFor(() => {
        //     expect(screen.getByText('¡Todos sus datos se perderán, incluyendo el acceso al curso')).toBeInTheDocument();
        // });
    // });
    // afterEach(() => {
    //     jest.restoreAllMocks();
    // });

// });
test('renders ProfileClient component without crashing', () => {
    render(<ProfileClient />);
    console.log(document.body.innerHTML);
    expect(screen.findByText('Continuar Prácticas')).toBeInTheDocument();
    expect(screen.getByText('Notas')).toBeInTheDocument();
    expect(screen.getByText('Eliminar')).toBeInTheDocument();
    expect(screen.getByText('Foto del cliente')).toBeInTheDocument();
});

// test('buttons trigger the correct functions when clicked', () => {
//     console.log = jest.fn();

//     fireEvent.click(screen.getByText('Continuar Prácticas'));
//     expect(console.log).toHaveBeenCalledWith('Continuar Prácticas');

//     fireEvent.click(screen.getByText('Notas'));
//     expect(console.log).toHaveBeenCalledWith('Notas');

//     fireEvent.click(screen.getByText('Eliminar'));
//     expect(console.log).toHaveBeenCalledWith('Eliminar');
// });

// test('handles delete operation correctly', async () => {
//     render(<ProfileClient />),
//     {
//         wrapper: ({ children }) => (
//             <UserContext.Provider value={mockUser}>
//                 <VideoContext.Provider value={mockProgress}>
//                     {children}
//                 </VideoContext.Provider>
//             </UserContext.Provider>
//         )
//     }
// });

// fireEvent.click(screen.getByText('Eliminar'));
// await waitFor(() => {
//     expect(screen.getByText('¡Todos sus datos se perderán, incluyendo el acceso al curso!')).toBeInTheDocument();
// });


