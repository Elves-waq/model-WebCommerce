import React from 'react';
import {Link} from 'react-router-dom';
import {HeaderArea} from './styled';
import logo from '../../.././imagens/logo1.png';

const Header = () => {
    return (
        <HeaderArea>
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="Logo de exemplo para WebCommerce"/>
                    </Link>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="">Login</Link>
                        </li>
                        <li>
                            <Link to="">register</Link>
                        </li>
                        <li>
                            <Link to="" className="button">Sell Here</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </HeaderArea>
    );       
}

export default Header;