import React from 'react'
import Icon from 'material-ui/Icon'
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

import Dialog from './Dialog'

class CreateMap extends React.Component {
    constructor(props){
        super(props)
        this.state = { open: false }
    }
    render(){
        const classes = this.props.classes
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
                onRequestClose={() => this.setState({ open: false })}
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

export default withStyles(styles)(CreateMap)
