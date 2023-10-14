import {getCounterValue} from "./selectors/getCounterValue";
import counterSlice, {increment, decrement} from "./counterSlice";

describe('counter slice', () => {
    test('increment', () => {
        expect(counterSlice({value: 0}, increment())).toEqual({value: 1})
    })

    test('decrement', () => {
        expect(counterSlice({value: 0}, decrement())).toEqual({value: -1})
    })

    test('with empty state', () => {
        expect(counterSlice(undefined, decrement())).toEqual({value: -1})
        expect(counterSlice(undefined, increment())).toEqual({value: 1})
    })

})