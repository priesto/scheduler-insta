import React from 'react';
import { Button, Icon } from 'antd';

import './Styles/Account.css';

export default (props) => (
    <div className="account" style={{backgroundImage: `url(${props.img})`}}>
        <Button onClick={props.showModal.bind(null, 'edit')} className="account-settings" shape="circle" type="primary" icon="ellipsis"/>
    </div>
)