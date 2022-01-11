import React from 'react';
import {PageContainer} from '../../Components/MainComponents'
import { Link } from 'react-router-dom';
import { AboutArea } from './style';

const PageAbout = () => {
    return (
        <PageContainer>
            <AboutArea>
                <h1>About Us</h1>
                <Link to="/">
                    <a>Home</a>
                </Link>
                <hr/>
                <p>
                This project aims to demonstrate all knowledge acquired through a course and applied in this application for the purpose of fixing knowledge and practice.  
                </p>
            </AboutArea>
        </PageContainer>
    );
};

export default PageAbout;