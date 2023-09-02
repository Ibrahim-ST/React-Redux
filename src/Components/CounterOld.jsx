import React, { useContext } from 'react';
import { COUNTER_CONTEXT } from '../Context/CounterContext';

const Counter = ( ) => {
    const {count, setCount} = useContext(COUNTER_CONTEXT);
    return (
        <div className='flex shrink-0 p-10 m-10 gap-5 bg-gray-200 rounded-xl max-w-md justify-center  '>
            <button onClick={() => setCount((prev) => prev-1)} className='bg-orange-400 py-2 px-5 rounded-md'>
                Decrement
            </button>
            <h1>{count}</h1>
            <button onClick={() => setCount((prev) => prev+1)} className='bg-violet-400 py-2 px-5 rounded-md'>
                Increment
            </button>
        </div>
    );
};

export default Counter;