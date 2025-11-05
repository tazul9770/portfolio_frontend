import React from 'react';

const Demo = () => {

    const num = 100;

    const n = num ? `Number ache bhaiya ${num}` : "Number nai";
    
    return (
        <div>
           <h1 className='text-center transform-3d text-3xl'>Hello kaser manush jon {n}</h1> 
        </div>
    );
};

export default Demo;