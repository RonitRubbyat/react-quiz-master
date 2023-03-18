import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const quizType = useLoaderData();
    const { data } = quizType;
    console.log(data);
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
};

export default Home;