import React from  'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';
import RecoverAccount from './pages/RecoverPassword';
import Signup from './pages/Signup/';
import AdPage from './pages/AdPage';
import AddSeller from './pages/PostNewAd';
import AuthLoggin from './Components/RouterAuthHandle';
import Ads from './pages/Ads'
import MyAccount from './pages/MyAccount';

export default () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>}/>
            <Route path="/signin" element={<SignIn />}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/ad/:id" element={<AdPage/>}/>
            <Route path="/my-account" element={<AuthLoggin><MyAccount/></AuthLoggin>}/>
            <Route path="/post-an-ad" element={<AuthLoggin><AddSeller/></AuthLoggin>}/>
            <Route path="/recoverpassword" element={<RecoverAccount/>}/>
            <Route path="/ads" element={<Ads/>}/>
            <Route path="*" element={<NotFound/>}/>
            
        </Routes>
    );
};
