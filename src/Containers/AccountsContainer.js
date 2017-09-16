import React from 'react';

import AccountsList from '../Components/AccountsList';
import Api from '../Utils/Api';

const initialState = {
    modalVisible: false,
    passwordVisible: false,
    username: '',
    password: '',
    proxy: '',
    type: ''
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
    }

    async componentDidMount() { this.setState({accounts: await Api.fetchAccounts()}); }

    handleOk(e) { this.resetState(); }
    handleCancel(e) { this.resetState(); }
    showModal(type, account, e) {
        if(type === 'edit') {
            this.setState({username: account.username, password: account.password})
        }
        this.setState({modalVisible: true, type});
    }
    handleChange(e) { this.setState({[e.target.name]: e.target.value}); }
    handlePasswordVisibility(e) { this.setState((prevState, props) => {
        return { passwordVisible: !prevState.passwordVisible }
    })}

    resetState() { this.setState(initialState); }

    render() {
        const { username, password, proxy } = this.state;
        const values = [username, password, proxy];
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
                values={values}
                type={this.state.type}
            />
        )
    }
}