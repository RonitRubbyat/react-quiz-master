import React from 'react';
import './QuizType.css';

const QuizType = ({quizCategory}) => {
    // console.log(quizCategory);
    const {id, name, total, logo} = quizCategory;
    return (
        <div className='col-12 col-sm-6'>
            <div id='quiz-card-container' className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={logo}className="img-fluid rounded-start" alt={name} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">Total quiz: {total}</p>
                            <button className="card-text btn btn-bg"><small>Participate</small></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizType;