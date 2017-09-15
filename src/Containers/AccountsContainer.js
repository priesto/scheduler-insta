import React from 'react';

import AccountsList from '../Components/AccountsList';
import Api from '../Utils/Api';

export default class AccountsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            accounts: [],
            addModalVisible: false,
            editModalVisible: false
        }

        this.handleCancel = this.handleCancel.bind(this);
        this.handleOk = this.handleOk.bind(this);
        this.showModal = this.showModal.bind(this);
    }

    async componentDidMount() {
        const accounts = await Api.fetchAccounts();
        this.setState({accounts});
    }

    handleOk(e) { this.setState({addModalVisible: false, editModalVisible: false}); }
    handleCancel(e) { this.setState({addModalVisible: false, editModalVisible: false}); }
    showModal(type, e) { type === 'add' ? this.setState({addModalVisible: true}) : this.setState({editModalVisible:true}); }
    
    render() {
        return (
            <AccountsList
                accounts={this.state.accounts}
                addModalVisible={this.state.addModalVisible}
                editModalVisible={this.state.editModalVisible}
                showModal={this.showModal}
                handleOk={this.handleOk}
                handleCancel={this.handleCancel}
            />
        )
    }
}