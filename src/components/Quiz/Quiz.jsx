import React from 'react';
import Options from '../Options/Options';

const Quiz = ({ questionObj }) => {
    const { id, question, options, correctAnswer } = questionObj;

    // modifying question data

    const newQuestion = question.slice(3, (question.length - 4));

    // console.log(questionObj);

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
        </div>
    );
};

export default Quiz;