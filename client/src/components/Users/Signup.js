import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUser } from '../../actions/users';

class Signup extends Component {
    constructor() {
        super();
        this.state = { name: '', password: '' }
    }

    submitForm(e) {
        e.preventDefault();
        this.props.createUser(this.state)
    }

    render() {
        return(
            <form onSubmit={e => this.submitForm(e)} className="question-form">
                <h3>Signup!</h3>
                <input type="text" name="name" value={this.state.name} className='form-control' placeholder='Username' onChange={({ target }) => {
                    const {name, value} = target;
                    this.setState({
                        [name]: value
                    });
                }} />
                <input type="password" name="password" value={this.state.password} className='form-control' placeholder='Password' onChange={({ target }) => {
                    const {name, value} = target;
                    this.setState({
                        [name]: value
                    });
                }} />
                <button className='btn btn-primary' disabled={this.state.email === '' && this.state.password === ''} type='submit'>Signup</button>
            </form>
        )
    }
}

const mapDispatchToProps = {
    createUser
}

export default connect(null, mapDispatchToProps)(Signup);