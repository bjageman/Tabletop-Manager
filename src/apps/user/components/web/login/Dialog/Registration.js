import React from 'react'

import Dialog, { DialogTitle, DialogContent, DialogContentText, DialogActions } from 'material-ui/Dialog';
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import { withStyles, createStyleSheet } from 'material-ui/styles';

class RegistrationDialog extends React.Component {
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

    handleRegistration = value => {
        console.log("Registration " + this.state.username + " with " + this.state.password)
        this.props.onRequestClose();
    };

    render(){
        return(
            <Dialog open={this.props.open} onRequestClose={this.handleRequestClose}>
                <DialogTitle>Registration</DialogTitle>
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
                          <Button onClick={this.handleRegistration} color="primary">
                            Register
                          </Button>
                        </DialogActions>
                </DialogContent>
            </Dialog>
        )
    }
}

const styleSheet = createStyleSheet('RegistrationDialog', (theme) => ({
  root: {
    color: 'inherit',
    textDecoration: 'inherit',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  primary: {
    paddingLeft: 40,
    margingRight: 20,
    color: "blue",
  },
  container: {
    marginLeft: "5%",
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
      marginRight: 10
  }
}));


export default withStyles(styleSheet)(RegistrationDialog);
