import React, { Component } from 'react';
import api from '../api.js';
import utils from '../utils.js';
// import hashes from '../hashes.js';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    setCredentials() {

    }

    login() {
        const request = {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                // "username": "jjj",
                // "password": "0cc1baa8f00987223c4160915f1d96afcb6f350bc6e6fdb491e90c837f747839"
                "username": this.state.username,
                "password": this.state.password
                // "password": hashes.sha256(this.state.password)
            })
        }

        fetch(`${api.location}/login`, request)
            .then(data => data.ok ? data.text() : Promise.reject())
            .then(data => {console.log(data); return data;})
            // .then(data => api.token = data)
            .then(data => localStorage.setItem('apiToken', data))
            .then(data => this.setState({data}))
            .catch();
    }

    render() {
        console.log(this.props.guid);
        return (
            <div className="login">
                <h1>Log in</h1>
                <div>
                    <label>Username</label>
                    <input type="text" onKeyUp={this.setCredentials.bind(this)} />
                    <br />
                    <label>Password</label>
                    <input type="password" onKeyUp={this.setCredentials.bind(this)} />
                    <br />
                    <button onClick={this.login.bind(this)}>Log in</button>
                </div>
            </div>
        );
    }
}

export default Login;
