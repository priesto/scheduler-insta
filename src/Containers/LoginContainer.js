import React from 'react';

import LoginForm from '../Components/LoginForm';

export default class LoginContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loading: false,
            loggedIn: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleChange(e) { this.setState({[e.target.name]: e.target.value}); }
    submit() { 
        this.setState({loading: true});
    }

    render() {
        return (
            <LoginForm handleChange={this.handleChange} submit={this.submit} loading={this.state.loading}/>
        )
    }
}