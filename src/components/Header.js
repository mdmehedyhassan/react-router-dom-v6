import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav style={{ textAlign: 'end', marginTop: '10px' }}>
            <ul>
                <Link className="linkTag" to="/">Home</Link>
                <Link className="linkTag" to="/secret">Secret</Link>
                <Link className="linkTag" to="/login">Login</Link>
            </ul>
        </nav>
    );
};

export default Header;