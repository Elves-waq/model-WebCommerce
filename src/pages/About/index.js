import React from 'react';
import { Link } from 'react-router-dom';

const PageAbout = () => {
    return (
        <div>
            <h1>About Us</h1>
            <Link to="/">
                <a>Home</a>
            </Link>
        </div>
    );
};

export default PageAbout;