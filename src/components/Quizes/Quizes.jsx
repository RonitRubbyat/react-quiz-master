import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizes = () => {
    const quizes = useLoaderData();
    const { name, logo, questions, total } = quizes.data;
    // console.log(quizes.data, name);
    return (
        <div className='container'>
            <div>
                <img src={logo} alt={name} width={'100px'} />
            </div>
            <h2>{name}</h2>
            <p>Total Quiz: {total}</p>
            <div>
                {
                    questions.map((question, idx) => <Quiz
                        key={idx}
                        questionObj={question}
                    ></Quiz>)
                }
            </div>
        </div>
    );
};

export default Quizes;