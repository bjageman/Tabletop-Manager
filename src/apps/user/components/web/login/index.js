import React from 'react'

import Dialog, { DialogTitle } from 'material-ui/Dialog';
import Button from 'material-ui/Button'

import LoginModal from './LoginModal'

class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            open: false,
        };
    }

    handleRequestClose = value => {
        this.setState({ open: false });
    };

    render(){
        return(
            <div id="login">
            <Button color={this.props.color} onClick={() => this.setState({ open: true })}>Login</Button>
            <LoginModal
                open={this.state.open}
                onRequestClose={this.handleRequestClose}
                />
            </div>
        )
    }
}

export default Login
