import React from 'react';
import { Button, Input, Icon, InputNumber } from 'antd';
import { Link } from 'react-router-dom';

import './Styles/SignupForm.css';

export default (props) => (
    <div className="signup-form">
        <Input name="username" onChange={props.handleChange} prefix={<Icon type="user" />} placeholder="username" />
        <Input name="password" onChange={props.handleChange} prefix={<Icon type="lock" />} placeholder="password" />
        <Input name="email" onChange={props.handleChange} prefix={<Icon type="mail" />} placeholder="email" />
        <InputNumber name="price" min={1} max={10} defaultValue={1} onChange={props.handlePriceChange} formatter={(value) => value + '\u0024' }/>
        <Button type="primary" loading={props.loading} onClick={props.submit}>Subscribe!</Button>
    </div>
)