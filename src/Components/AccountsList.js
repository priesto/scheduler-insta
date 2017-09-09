import React from 'react';
import { Button, Modal, Input, Icon } from 'antd';

import Account from './Account';

import './Styles/AccountsList.css';

export default (props) => (
    <div className="accounts-list">
        <Button onClick={props.showModal} shape="circle" type="ghost" icon="plus" style={{width: '75px', height: '75px'}}/>
        {props.accounts.map((account, index) => <Account key={index} img={account.img}/>)}
        <Modal
            title="Basic Modal"
            visible={props.modalVisible}
            onOk={props.handleOk}
            onCancel={props.handleCancel}
        >
            <Input prefix={<Icon type="user" />} placeholder="username" />
            <Input prefix={<Icon type="lock" />} type="password" placeholder="password" />
            <Input prefix={<Icon type="global" />} placeholder="proxy (optional)" />
        </Modal>
    </div>
)