import React, { useContext } from 'react';
import { Outlet } from 'react-router';
import { UserContext } from '../App';
import Login from './Login';

const PrivetRoute = () => {
    const [isUser] = useContext(UserContext);
    return isUser ? <Outlet/> : <Login/>
};

export default PrivetRoute;