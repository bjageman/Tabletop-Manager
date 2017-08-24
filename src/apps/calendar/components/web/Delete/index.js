import React from 'react'
import Icon from 'material-ui/Icon'
import IconButton from 'material-ui/IconButton';
import { withStyles } from 'material-ui/styles';

import Dialog from './Dialog'

class DeleteCharacter extends React.Component {
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
                onClick = {() => this.setState({open: true})}>
                <Icon>delete</Icon>
            </IconButton>
            <Dialog
                event={this.props.event}
                open={this.state.open}
                onRequestClose={this.handleRequestClose}
                />
            </div>
        )
    }
}

export const styles = theme => ({
  button: {
      color: "red",
  },
});

export default withStyles(styles)(DeleteCharacter)
