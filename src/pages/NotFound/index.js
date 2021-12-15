import React from 'react';
import { Link } from 'react-router-dom';
import { AreaNotFound } from './styled';
const NotFound = () => {
    return (
        <AreaNotFound>
            <h1>Page not found</h1>
            <Link to="/">
                <a>Back to home page</a>
            </Link>
        </AreaNotFound>
    );
};

export default NotFound;