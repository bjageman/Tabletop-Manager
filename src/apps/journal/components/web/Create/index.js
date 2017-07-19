import React from 'react'
import Icon from 'material-ui/Icon'
import Button from 'material-ui/Button';

import { withStyles, createStyleSheet } from 'material-ui/styles'

import EntryCreateDialog from './Dialog'

const styleSheet = createStyleSheet('CreateEntry', theme => ({
  button: {
    margin: theme.spacing.unit,
  },
}));

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
                fab color="primary"
                className={classes.button}
                onClick = {() => this.setState({open: true})}
                >
                <Icon>create</Icon>
            </Button>
            <EntryCreateDialog
                open={this.state.open}
                onRequestClose={this.handleRequestClose}
                onRequestSave={this.handleSave}
                title={this.state.title}
                content={this.state.content}
            />
            </div>
        )
    }
}

export default withStyles(styleSheet)(CreateEntry)