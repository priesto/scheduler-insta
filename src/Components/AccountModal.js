import React from 'react';
import { Modal, Input, Icon, Button, Alert } from 'antd';

import './Styles/AccountModal.css';

const isEdit = (type) => type === 'edit';
const isAdd = (type) => type === 'add';

export default (props) => (
    <Modal
        title={isAdd(props.type) ? 'Add An Account' : 'Edit or Delete An Account'}
        visible={props.modalVisible}
        onOk={props.handleOk}
        onCancel={props.handleCancel}
        footer={
            isEdit(props.type) ? (
                <div>
                    <Button>Cancel</Button>
                    <Button type="primary">Update</Button>
                    <Button type="danger" onClick={props.handleDelete.bind(null, props.values[3])} loading={props.submitLoading}>Delete</Button>
                </div>
            ) : (
                <div>
                    <Button>Cancel</Button>
                    <Button type="primary" disabled={!props.values[0] || !props.values[1]} onClick={props.handleSubmit} loading={props.submitLoading}>Add</Button>
                </div>
            )
        }
    >
        <Input value={props.values[0]} name="username" onChange={props.handleChange} prefix={<Icon type="user" />} placeholder="username" disabled={isEdit(props.type)}/>
        <Input value={props.values[1]} name="password" onChange={props.handleChange} prefix={<Icon type="lock" />} type={props.passwordVisible ? 'text' : 'password'} suffix={<Icon onClick={props.handlePasswordVisibility} type="eye" />} placeholder="password" />
        <Input value={props.values[2]} name="proxy" onChange={props.handleChange} prefix={<Icon type="global" />} placeholder="proxy" />
        {props.submitCompleted.state && <Alert type={props.submitCompleted.res.type} message={props.submitCompleted.res.msg} closable/>}            
    </Modal>
)