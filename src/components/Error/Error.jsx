import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError();
    return (
        <div>
            <h3>Oops!</h3>
            <p>Something went wrong! Please, try again later</p>
            <i>
                {
                    error.statusText || error.message
                }
            </i>
        </div>
    );
};

export default Error;