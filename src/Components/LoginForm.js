import React from 'react';
import { Icon, Input, Button } from 'antd';
import { Link } from 'react-router-dom';

import './Styles/LoginForm.css';

export default (props) => (
    <div className="login-form">
        <Input name="username" onChange={props.handleChange} prefix={<Icon type="user" />} placeholder="username" />
        <Input name="password" onChange={props.handleChange} prefix={<Icon type="lock" />} placeholder="password" />
        <Button loading={props.loading} onClick={props.submit} type="primary">Log In!</Button>
        <Link to="#">Forgot password?</Link>
    </div>
)