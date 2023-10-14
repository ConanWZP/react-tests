import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCounterValue} from "../../store/reducers/selectors/getCounterValue";
import {decrement, increment} from "../../store/reducers/counterSlice";

const Counter = () => {

    const counterValue = useSelector(getCounterValue)

    const dispatch = useDispatch()

    const onIncrement = () => {
        dispatch(increment())
    }

    const onDecrement = () => {
        dispatch(decrement())
    }

    return (
        <div>
            <h1 data-testid='value-title'>{counterValue}</h1>
            <button data-testid='increment-btn' onClick={onIncrement}>increment</button>
            <button data-testid='decrement-btn' onClick={onDecrement}>decrement</button>
        </div>
    );
};

export default Counter;