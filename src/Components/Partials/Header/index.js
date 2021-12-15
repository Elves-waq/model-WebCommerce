import React from 'react';
import {Link} from 'react-router-dom';
import {HeaderArea} from './styled';
import logo from '../../.././imagens/logo1.png';
import { isLogged } from '../../../helpers/AuthHandler';

const Header = () => {
    let logged = isLogged();

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

                        {logged &&
                            <>
                                <li>
                                    <Link to="/my-account">My account</Link>
                                </li>
                                <li>
                                    <Link to="/logout">Logout</Link>
                                </li> 
                                <li>
                                    <Link to="/post-an-ad" className="button">Post an ad</Link>
                                </li>

                            </>
                        }

                        {!logged &&
                            <>
                                <li>
                                    <Link to="/signin">Login</Link>
                                </li>
                                <li>
                                    <Link to="/signup">register</Link>
                                </li> 
                                <li>
                                    <Link to="/signin" className="button">Post an ad</Link>
                                </li>                           
                            </>                        
                        }
                    </ul>
                </nav>
            </div>
        </HeaderArea>
    );       
}

export default Header;