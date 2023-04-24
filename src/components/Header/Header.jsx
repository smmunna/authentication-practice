import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { AuthContext } from '../../provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    return (
        <div className='text-center'>
            <h3 className='display-6'>Authentication System</h3>
            <div>
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
                {
                    user ?
                        <>
                            <Link to="/user">{user?.displayName}ok</Link>
                            <button onClick={logOut}>Logout</button>
                        </>
                        :
                        <><Link to="/register">Login</Link></>
                }

            </div>
        </div>
    );
}

export default Header;
