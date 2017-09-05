import React from 'react'
import Button from 'apps/toolkit/components/web/Button';
import { withStyles } from 'material-ui/styles';

import Dialog from './Dialog'

class CreateCharacter extends React.Component {
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
            Create Character
            </Button>
            <Dialog
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

export default withStyles(styles)(CreateCharacter)
