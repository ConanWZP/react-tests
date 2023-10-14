import {act, render, screen} from '@testing-library/react';
import Users from "./Users";
import axios from "axios";
import userEvent from "@testing-library/user-event";
import {MemoryRouter, Route, Routes} from "react-router-dom";
import UserDetailsPage from "../pages/UserDetailsPage";
import React from "react";
import AppRouter from "../router/AppRouter";
import {renderWithRouter} from "../tests/helpers/renderWithRouter";


jest.mock('axios')

describe('test Users.jsx', () => {

    let response;
    beforeEach(() => {
        response = {
            data: [
                {
                    "id": 1,
                    "name": "Leanne Graham",
                },
                {
                    "id": 2,
                    "name": "Ervin Howell",
                },
            ]
        }
    })
    afterEach(() => {
        jest.clearAllMocks();
    })
    test('Renders users', async () => {
        axios.get.mockReturnValue(response)
        render(<Users/>);
        const users = await screen.findAllByTestId('user-item')
        expect(users.length).toBe(2)
        expect(axios.get).toBeCalledTimes(1)
        screen.debug()
    })

    // тестирование react-router-dom так тестировать не удобно!!!
    test('test redirecting to details page', async () => {
        axios.get.mockReturnValue(response)

        render(<MemoryRouter initialEntries={['/users']}>
            <Routes>
                <Route path={'/users'} element={<Users/>}/>
                <Route path={'/users/:id'} element={<UserDetailsPage/>}/>
            </Routes>
        </MemoryRouter>);
        const users = await screen.findAllByTestId('user-item')
        act(() => {
            userEvent.click(users[0])
        })
        expect(screen.getByTestId('user-page')).toBeInTheDocument()
    })

    // Создали отдельную компоненту с Роутерами и хелпер функцию

    test('test redirecting to details page Simplify', async () => {
        axios.get.mockReturnValue(response)

        render(
            // Работает для всех трёх вариантов
           // renderWithRouter(<Users/>, '/users')
           // renderWithRouter(null, '/users')
             renderWithRouter(<Users/>)
        );
        const users = await screen.findAllByTestId('user-item')
        act(() => {
            userEvent.click(users[0])
        })
        expect(screen.getByTestId('user-page')).toBeInTheDocument()
    })
})