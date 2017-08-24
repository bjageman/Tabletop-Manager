import React from 'react'
import Icon from 'material-ui/Icon'
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

import Dialog from './Dialog'

class CreateItem extends React.Component {
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
            <Button
                fab color="primary"
                className={classes.button}
                onClick = {() => this.setState({open: true})}
                >
                <Icon>add</Icon>
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

export default withStyles(styles)(CreateItem)
