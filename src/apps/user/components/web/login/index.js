import React from 'react'

import Button from 'material-ui/Button'
import Icon from 'material-ui/Icon'

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
            <Button color={this.props.color} onClick={() => this.setState({ open: true })}><Icon>person</Icon> Login / Sign Up</Button>
            <LoginModal
                open={this.state.open}
                onRequestClose={this.handleRequestClose}
                />
            </div>
        )
    }
}

export default Login
