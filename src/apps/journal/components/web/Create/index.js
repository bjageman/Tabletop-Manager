import React from 'react'
import Button from 'material-ui/Button';

import { withStyles } from 'material-ui/styles';

import Dialog from './Dialog'

export const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

class CreateEntry extends React.Component {
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
        return(
            <div>
            <Button
                raised
                color="primary"
                className={classes.button}
                onClick = {() => this.setState({open: true})}
                >
                New Entry
            </Button>
            <Dialog
                open={this.state.open}
                onRequestClose={this.handleRequestClose}
                title={this.state.title}
                content={this.state.content}
                campaign={this.props.campaign}
            />
            </div>
        )
    }
}

export default withStyles(styles)(CreateEntry)