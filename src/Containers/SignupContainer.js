import React from 'react';

import SignupForm from '../Components/SignupForm';

export default class SignupContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            price: '',
            loading: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleChange(e) { this.setState({[e.target.name]: e.target.value}); }
    handlePriceChange(value) { this.setState({price: value}); }

    submit() { 
        this.setState({loading: true});
    }

    render() {
        return (
            <SignupForm
                handleChange={this.handleChange}
                handlePriceChange={this.handlePriceChange}
                submit={this.submit}
                loading={this.state.loading}
            />
        )
    }
}