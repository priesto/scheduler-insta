import React from 'react';
import { Button } from 'antd';

import './Styles/Account.css';

export default (props) => (
    <div className="account" style={{backgroundImage: `url(${props.img})`}} />
)