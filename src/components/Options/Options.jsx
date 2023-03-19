import React, { useState } from 'react';
import './Options.css'

const Options = ({ option, correctAnswer }) => {
    // console.log(option);
    let [isCorrect, setIsCorrect] = useState('');
    const handelOp = () => {
        isCorrect = option === correctAnswer ? 'green' : 'red';
        setIsCorrect(isCorrect);
    }
    return (
        <button onClick={handelOp} className={`op btn col-12 ${isCorrect}`}>
            <h2>{option}</h2>
        </button>
    );
};

export default Options;