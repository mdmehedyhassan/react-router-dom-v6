import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav style={{ textAlign: 'end', marginTop: '10px' }}>
            <ul>
                <Link className="linkTag" to="/">Home</Link>
                <Link className="linkTag" to="/secret">Secret</Link>
                <Link className="linkTag" to="/nested">Nested</Link>
                <Link className="linkTag" to="/nested/three">Child 3</Link>
                <Link className="linkTag" to="/login">Login</Link>
                <a href="https://github.com/mdmehedyhassan/react-router-dom-v6" target="blank" ><button>Github link</button></a>
            </ul>
        </nav>
    );
};

export default Header;