import React from  'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';
import RecoverAccount from './pages/RecoverPassword';
import Signup from './pages/Signup/';
import AdPage from './pages/AdPage';

export default () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>}/>
            <Route path="/signin" element={<SignIn />}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/ad/:id" element={<AdPage/>}/>
            <Route path="/recoverpassword" element={<RecoverAccount/>}/>
            <Route path="*" element={<NotFound/>}/>
            
        </Routes>
    );
};
