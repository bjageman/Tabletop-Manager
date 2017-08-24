import React from 'react'
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

import CreateEventDialog from './Dialog'

class CreateEvent extends React.Component {
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
        return(
            <div>
            <Button
                raised
                color="primary"
                onClick = {() => this.setState({open: true})}>
                Create Event
            </Button>

            <CreateEventDialog
                open={this.state.open}
                onRequestClose={this.handleRequestClose}
                />
            </div>
        )
    }
}

export const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

export default withStyles(styles)(CreateEvent)
