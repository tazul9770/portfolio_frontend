import React, { useState } from 'react';

const Button = () => {
    const [visible, setVisible] = useState(false)
    return (
        <div className='max-w-md mx-auto m-5'>
            {visible && (
                <div className='flex justify-between mx-auto max-w-md m-5 bg-green-200 text-green-700 p-4 '>
                <span className='font-medium'>This is a alert</span>
                <button onClick={() => setVisible(false)} className='text-green-800 font-semibold cursor-pointer text-2xl'>x</button>
            </div>
            )}
            <button onClick={() => setVisible(true)} className='px-3 py-2 cursor-pointer hover:bg-green-700 bg-green-500 text-white rounded-sm font-medium'>Show alert</button>
        </div>
    );
};

export default Button;