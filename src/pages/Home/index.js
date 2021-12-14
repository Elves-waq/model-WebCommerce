import React from 'react';
import { Link } from 'react-router-dom';

const PageHome = () => {
    return (
        <div>
            <h1>Initial Page</h1>
            <Link to="/about">
                <a>About</a>
            </Link>
        </div>
    );

};

export default PageHome;