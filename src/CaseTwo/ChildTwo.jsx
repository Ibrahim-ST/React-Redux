 
import React from 'react';
import Counter from '../Components/Counter';

const ChildTwo = () => {
    return (
        <div>
            <div className='border-2 border-red-600 m-10 max-w-4xl mx-auto rounded-md '>
            <div className='bg-red-400 w-10 h-10 m-5 rounded-full text-3xl grid place-content-center'>
                <p>2</p>
            </div>
            <div className='w-full grid place-content-center'>
            <Counter />
            </div>
        </div>
        </div>
    );
};

export default ChildTwo;