import React, { useState } from 'react';
import Options from '../Options/Options';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons'

const Quiz = ({ questionObj }) => {
    const { question, options, correctAnswer } = questionObj;

    // modifying question data

    const newQuestion = question.slice(3, (question.length - 4));

    // console.log(questionObj);

    // show correct ans
    const [show, setShow] = useState(false);

    return (
        <div className="card my-4">
            <div className="card-header">
                {newQuestion}
            </div>
            <div className="card-body row g-3 op-marg">
                {
                    options.map((op, idx) => <Options
                        key={idx}
                        option={op}
                        correctAnswer={correctAnswer}
                    ></Options>)
                }
            </div>
            <div>
                <p onClick={() => setShow(!show)}>Show Correct Answer: <FontAwesomeIcon role={'button'} icon={faEye} /></p>
            </div>
            <div className={`${!show ? 'd-none': 'd-block'}`}>
                <h4>{correctAnswer}</h4>
            </div>
        </div>
    );
};

export default Quiz;