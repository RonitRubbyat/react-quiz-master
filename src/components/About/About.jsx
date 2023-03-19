import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
const About = () => {
    const quizData = useLoaderData();
    // console.log(quizData.data);
    return (
        <div>
            <h2>Learn about our quiz</h2>
            <div className='d-flex justify-content-center my-5'>
                <LineChart width={300} height={250} data={quizData.data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="total" stroke="#8884d8" />
                </LineChart>
            </div>
        </div>
    );
};

export default About;