import React from 'react';
import { Modal, Input, Icon } from 'antd';

export default (props) => (
    props.type === 'add' ? (
        <Modal
            title="Add Account"
            visible={props.addModalVisible}
            onOk={props.handleOk}
            onCancel={props.handleCancel}
        >
            <Input prefix={<Icon type="user" />} placeholder="username" />
            <Input prefix={<Icon type="lock" />} type="password" placeholder="password" />
            <Input prefix={<Icon type="global" />} placeholder="proxy (optional)" />
        </Modal>
    ) :
    (
        <Modal 
            title="edit or delete an account"
            visible={props.editModalVisible}
            onOk={props.handleOk}
            onCancel={props.handleCancel}
        >
        </Modal>
    )
)