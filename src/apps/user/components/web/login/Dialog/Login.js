import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'

import TextField from 'material-ui/TextField'
import Dialog from 'apps/toolkit/components/web/Dialog';
import Button from 'apps/toolkit/components/web/Button';
import { withStyles } from 'material-ui/styles';

class LoginDialog extends React.Component {
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

        this.props.login({
            "username": this.state.username,
            "password": this.state.password,
        })
        this.props.onRequestClose();
    };

    render(){
        return(
            <Dialog open={this.props.open} onRequestClose={this.handleRequestClose}>
                <TextField
                   required
                   id="username"
                   name="username"
                   label="Username"
                   value={this.state.username}
                   onChange={event => this.setState({ [event.target.name]: event.target.value })}
                   marginForm
                 />
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
              <Button onClick={this.handleRequestClose} color="primary">
                Cancel
              </Button>
              <Button onClick={this.handleLogin} color="primary">
                Login
              </Button>
                <Button onClick={this.props.openRegistration} color="primary">
                  Sign Up
                </Button>
            </Dialog>
        )
    }
}

export const styles = theme => ({
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
});


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(LoginDialog));
