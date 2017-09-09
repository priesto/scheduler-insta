import React from 'react';

import AccountsList from '../Components/AccountsList';

export default class AccountsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            accounts: [{
                img: 'https://scontent.cdninstagram.com/t51.2885-19/11875342_456870941163897_268129809_a.jpg'
            }, {
                img: 'https://scontent.cdninstagram.com/t51.2885-19/s150x150/20582933_108828933127668_4306665567143591936_a.jpg'
            }],
            modalVisible: false
        }

        this.handleCancel = this.handleCancel.bind(this);
        this.handleOk = this.handleOk.bind(this);
        this.showModal = this.showModal.bind(this);
    }

    handleOk(e) { console.log(e); this.setState({modalVisible: false}); }
    handleCancel(e) { console.log(e); this.setState({modalVisible: false}); }
    showModal() { this.setState({modalVisible: true}); }
    
    render() {
        return (
            <AccountsList
                accounts={this.state.accounts}
                modalVisible={this.state.modalVisible}
                showModal={this.showModal}
                handleOk={this.handleOk}
                handleCancel={this.handleCancel}
            />
        )
    }
}