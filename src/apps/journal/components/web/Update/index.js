import React from 'react'
import Icon from 'material-ui/Icon'
import IconButton from 'material-ui/IconButton';
import { withStyles, createStyleSheet } from 'material-ui/styles'

import Dialog from '../Create/Dialog'

class UpdateJournal extends React.Component {
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
        const { classes, entry, ...other } = this.props
        return(
            <div>
            <IconButton
                className={classes.button}
                onClick = {() => this.setState({open: true})}>
                <Icon>create</Icon>
            </IconButton>
            <Dialog
                open={this.state.open}
                onRequestClose={this.handleRequestClose}
                entry={this.props.entry}
                />
            </div>
        )
    }
}

const styleSheet = createStyleSheet('UpdateJournal', theme => ({
  button: {
  },
}));

export default withStyles(styleSheet)(UpdateJournal)
