import React from 'react'

import Dialog, { DialogTitle, DialogContent, DialogContentText, DialogActions } from 'material-ui/Dialog';
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import { withStyles } from 'material-ui/styles';

import styleSheet from './styles/login'

class LoginModal extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            "username": "",
            "password": ""
        }
    }
    handleRequestClose = () => {
        this.props.onRequestClose();
    };

    handleLogin = value => {
        console.log("Login " + this.state.username + " with " + this.state.password)
        this.props.onRequestClose();
    };

    render(){
        const classes = this.props.classes
        return(
            <Dialog open={this.props.open} onRequestClose={this.handleRequestClose}>
                <DialogTitle>Login</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <TextField
                               required
                               id="username"
                               name="username"
                               label="Username"
                               value={this.state.username}
                               onChange={event => this.setState({ [event.target.name]: event.target.value })}
                               marginForm
                             />
                        </DialogContentText>
                        <DialogContentText>
                            <TextField
                              required
                              id="password"
                              name="password"
                              label="Password"
                              type="password"
                              value={this.state.password}
                              onChange={event => this.setState({ [event.target.name]: event.target.value })}
                              marginForm
                            />
                        </DialogContentText>
                        <DialogActions>
                          <Button onClick={this.handleRequestClose} color="primary">
                            Cancel
                          </Button>
                          <Button onClick={this.handleLogin} color="primary">
                            Login
                          </Button>
                        </DialogActions>
                        <Divider light />
                        <DialogContentText>
                            Need to Create an Account?
                        </DialogContentText>
                </DialogContent>
            </Dialog>
        )
    }
}

export default withStyles(styleSheet)(LoginModal);
