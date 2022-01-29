import React, { useContext } from 'react';
import { UserContext } from '../App';

const Login = () => {
    const [isUser, setIsUser] = useContext(UserContext);
    return (
        <div style={{textAlign:'center'}}>
            <h1>this is login</h1>
            <button onClick={() => setIsUser(!isUser)}>{isUser ? 'logout' : 'login'}</button>
        </div>
    );
};

export default Login;