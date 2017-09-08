import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

import LoginContainer from '../Containers/LoginContainer';
import DividerWithTextMiddle from '../Components/DividerWithTextMiddle';

import './Styles/Login.css';

export default () => (
    <div className="login-container">
        <LoginContainer />
        <DividerWithTextMiddle text="OR" />
        <Link to="/signup"><Button type="ghost">Sign Up!</Button></Link>
    </div>
)