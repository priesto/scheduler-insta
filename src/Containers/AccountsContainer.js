import React from 'react';

import AccountsList from '../Components/AccountsList';
import Api from '../Utils/Api';

const initialState = {
    modalVisible: false,
    passwordVisible: false,
    submitLoading: false,
    submitCompleted: {
        state: false,
        res: { msg: '', type: '' }
    },
    username: '',
    password: '',
    proxy: '',
    type: '',
    id: ''
}

export default class AccountsContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {...initialState, accounts: []};
        this.handleCancel = this.handleCancel.bind(this);
        this.handleOk = this.handleOk.bind(this);
        this.showModal = this.showModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handlePasswordVisibility = this.handlePasswordVisibility.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    async componentDidMount() {
        try {
            const accounts = await Api.fetchAccounts();
            this.setState({accounts: accounts});
        } catch (error) {
            console.log(error);
        }
    }

    handleOk(e) { this.resetState(); }
    handleCancel(e) { this.resetState(); }
    showModal(type, account, e) {
        if(type === 'edit') {
            this.setState({username: account.username, password: account.password, id: account._id})
        }
        this.setState({modalVisible: true, type});
    }
    
    handleChange(e) { this.setState({[e.target.name]: e.target.value}); }
    
    handlePasswordVisibility(e) { this.setState((prevState, props) => {
            return { passwordVisible: !prevState.passwordVisible }
        }
    )}

    async handleSubmit(e) {
        this.setState({submitLoading: true});
        const { username, password, proxy } = this.state;
        try {
            const accounts = await Api.addAccount({username, password, proxy});
            this.setState({accounts: accounts, submitCompleted: { state: true, res: { msg: 'Account Added', type: 'success'} }, submitLoading:false});
        } catch (e) {
            console.log(e);
            this.setState({submitCompleted: { state: true, res: { msg: e, type: 'error'} }, submitLoading: false});
        }
    }

    handleUpdate(e) {

    }

    async handleDelete(id, e) {
        this.setState({submitLoading: true});
        try {
            const accounts = await Api.deleteAccount(id);
            this.setState({accounts, submitLoading: false, submitCompleted: { state: true, res: { msg: 'Account Deleted', type: 'success'} }});
        } catch (e) {
            console.log(e);
            this.setState({submitLoading: false, submitCompleted: { state: true, res: {msg: e, type: 'error'} }})
        }
    }

    resetState() { this.setState(initialState); }

    render() {
        const { username, password, proxy, id } = this.state;
        const values = [username, password, proxy, id];
        return (
            <AccountsList
                accounts={this.state.accounts}
                modalVisible={this.state.modalVisible}
                passwordVisible={this.state.passwordVisible}
                showModal={this.showModal}
                handleOk={this.handleOk}
                handleCancel={this.handleCancel}
                handleChange={this.handleChange}
                handlePasswordVisibility={this.handlePasswordVisibility}
                handleSubmit={this.handleSubmit}
                handleDelete={this.handleDelete}
                submitLoading={this.state.submitLoading}
                submitCompleted={this.state.submitCompleted}
                values={values}
                type={this.state.type}
            />
        )
    }
}