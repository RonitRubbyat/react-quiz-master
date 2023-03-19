import React, { useState } from 'react';
import './Options.css'

const Options = ({ option, correctAnswer }) => {
    // console.log(option);
    const [isCorrect, setIsCorrect] = useState('');

    const handelOp = () => {
        setIsCorrect(option === correctAnswer ? 'success' : 'danger');
    }

    return (
        <div className='col-12 col-md-6'>
            <button onClick={handelOp} className={`op w-100 bg-${isCorrect}`}>
                <h2>{option}</h2>
            </button>
        </div>
    );
};

export default Options;