import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByValue } from '../Redux/Features/Counter/counterSlice';
const Counter = () => { 
    const {count} = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(incrementByValue(5))}>Increment by 5</button> <br />
            <button onClick={() => dispatch(increment())}>Increment</button>
            <h1>{count}</h1>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            
        </div>
    );
};

export default Counter;