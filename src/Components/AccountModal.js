import React from 'react';
import { Modal, Input, Icon, Button } from 'antd';

const isEdit = (type) => type === 'edit';
const isAdd = (type) => type === 'add';

export default (props) => (
    <Modal
        title={isAdd(props.type) ? 'Add An Account' : 'Edit or Delete An Account'}
        visible={props.modalVisible}
        onOk={props.handleOk}
        onCancel={props.handleCancel}
        okText={isEdit(props.type) ? 'Update' : 'Add'}
    >
        <Input value={props.values[0]} name="username" onChange={props.handleChange} prefix={<Icon type="user" />} placeholder="username" disabled={isEdit(props.type)}/>
        <Input value={props.values[1]} name="password" onChange={props.handleChange} prefix={<Icon type="lock" />} type={props.passwordVisible ? 'text' : 'password'} suffix={<Icon onClick={props.handlePasswordVisibility} type="eye" />} placeholder="password" />
        <Input value={props.values[2]} name="proxy" onChange={props.handleChange} prefix={<Icon type="global" />} placeholder="proxy" />
    </Modal>
)