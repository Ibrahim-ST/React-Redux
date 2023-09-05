import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
const Counter = () => {
    const {count} = useSelector((state) => state.counter);
    console.log(count);
    return (
        <div>
            <button>Increment</button>
            <h1>{count}</h1>
            <button>Decrement</button>
        </div>
    );
};

export default Counter;