import {render, screen, fireEvent, act} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import Navbar from "./Navbar";
import {renderWithRouter} from "../../tests/helpers/renderWithRouter";



describe('test Navbar', () => {


    test('about page test', () => {4545444
        const aboutLink = screen.getByTestId('about-link');

        act(() => {
            userEvent.click(aboutLink)
        })
        expect(screen.getByTestId('about-page')).toBeInTheDocument()


    })
    test('main page test', () => {
        render(renderWithRouter(<Navbar/>));
        const mainLink = screen.getByTestId('main-link');

        act(() => {
            userEvent.click(mainLink)
        })
        expect(screen.getByTestId('main-page')).toBeInTheDocument()


    })

    test('users page test', () => {
        render(renderWithRouter(<Navbar/>));
        const usersLink = screen.getByTestId('users-link');

        act(() => {
            userEvent.click(usersLink)
        })
        expect(screen.getByTestId('users-page')).toBeInTheDocument()


    })
})