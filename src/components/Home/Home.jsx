import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizType from '../QuizType/QuizType';

const Home = () => {
    const quizType = useLoaderData();
    const { data } = quizType;
    // console.log(data);
    return (
        <div className='container'>
            <h2 className='mt-4 mb-5'>Participate Any <i className='text-danger'>Quiz</i> You Want To.</h2>
            <div className='row g-4'>
                {
                    data.map((quizCategory, idx) => <QuizType
                        key={idx}
                        quizCategory={quizCategory}
                    ></QuizType>)
                }
            </div>
        </div>
    );
};

export default Home;