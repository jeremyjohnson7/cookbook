import React, { Component } from 'react';
import api from '../api.js';
import utils from '../utils.js';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    render() {
        console.log(this.props.guid);
        return (
            <div className="login">
                <h1>Log in</h1>
                <form>
                    <input type="text" />
                    <input type="password" />
                </form>
            </div>
        );
    }
}

export default Login;
