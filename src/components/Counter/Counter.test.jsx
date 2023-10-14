import {act, render, screen} from "@testing-library/react";
import Counter from "./Counter";
import userEvent from "@testing-library/user-event";
import {Provider} from "react-redux";
import {store} from "../../store/store";
import {renderWithRedux} from "../../tests/helpers/renderWithRedux";

import {renderTestApp} from "../../tests/helpers/renderTestApp";


describe('counter test', () => {
    test('test rounter', () => {
        /*render(<Counter />)
        const incrementBtn = screen.getByTestId('increment-btn')*/
        // ИЛИ
        const {getByTestId} = render(
            /*<Provider store={store({
                counter: {
                    value: 15
                }
            })}>
                <Counter/>
            </Provider>*/
            /*renderWithRedux(<Counter/>, {
                counter: {value: 15}
            })*/


            // передаем null, а не <Counter /> т.к. находит компонент будет отрисован как по роуту '/',
            // так и по <Counter /> , т.е. просто дважды будет <Counter />
            // или можно было бы передать какой-то другой initialRoute
            renderTestApp(null, {
                initialRoute: '/',
                initialState: {
                    counter: {
                        value: 15
                    }
                }
            })
        )
        const incrementBtn = getByTestId('increment-btn')
        expect(getByTestId('value-title')).toHaveTextContent('15')
        act(() => {
            userEvent.click(incrementBtn)
        })

        expect(getByTestId('value-title')).toHaveTextContent('16')
    })
})