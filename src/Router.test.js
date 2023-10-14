import {render, screen, fireEvent, act} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import AppNew from "./AppNew";
import {MemoryRouter} from "react-router-dom";



describe('test app.js', () => {

    test('renders pages',  () => {
        render(
            <MemoryRouter>
                <AppNew/>
            </MemoryRouter>
        );
        const mainLink = screen.getByTestId('main-link');
        const aboutLink = screen.getByTestId('about-link');

       act(() => {
           userEvent.click(aboutLink)
        })

        expect(screen.getByTestId('about-page')).toBeInTheDocument()

        act(() => {
            userEvent.click(mainLink)
        })

        expect(screen.getByTestId('main-page')).toBeInTheDocument()

    })
    test('Error page test',  () => {
        render(
            <MemoryRouter initialEntries={['/kjfdlsghndfjgnh']}>
                <AppNew/>
            </MemoryRouter>
        );

        expect(screen.getByTestId('error-page')).toBeInTheDocument()



    })
})