import React from 'react';
import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';

const Parent = ( ) => {
    return (
        <div className='max-w-7xl mx-auto rounded-md border-2 border-blue-600 m-20'>
            <ChildOne  />
            <ChildTwo  />
        </div>
    );
};

export default Parent;