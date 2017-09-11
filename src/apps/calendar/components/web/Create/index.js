import React from 'react'
import { Button, Icon } from 'bjageman-react-toolkit';

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
                float
                onClick = {() => this.setState({open: true})}>
                <Icon name="add" />
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

export default (CreateEvent)
