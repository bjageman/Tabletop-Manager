import React from 'react'
import Icon from 'material-ui/Icon'
import IconButton from 'material-ui/IconButton';
import { withStyles } from 'material-ui/styles';

import Dialog from '../Create/Dialog'

class UpdateCharacter extends React.Component {
    constructor(props){
        super(props)
        this.handleRequestClose = this.handleRequestClose.bind(this)
        this.state = {
            open: false,
        }
    }

    handleRequestClose() {
        this.setState({
            open: false
        })
    }

    render(){
        const classes = this.props.classes
        console.log(this.state.open)
        return(
            <div>
            <IconButton
                className={classes.button}
                color="primary"
                onClick = {() => this.setState({open: true})}>
                <Icon>create</Icon>
            </IconButton>
            <Dialog
                open={this.state.open}
                onRequestClose={this.handleRequestClose}
                player
                />
            </div>
        )
    }
}

export const styles = theme => ({
  button: {
  },
});

export default withStyles(styles)(UpdateCharacter)
