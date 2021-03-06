import React from 'react';
import { Button } from 'antd';

import Account from './Account';
import AccountModal from './AccountModal';

import './Styles/AccountsList.css';

export default (props) => (
    <div className="accounts-list">
        <Button onClick={props.showModal.bind(null, 'add')} shape="circle" type="ghost" icon="plus" style={{width: '75px', height: '75px'}}/>
        {props.accounts.map((account) => <Account key={account._id} img={account.img} showModal={props.showModal.bind(null, 'edit', account)}/>)}
        <AccountModal type={props.type} {...props} />
    </div>
)