import React from 'react'
import Icon from 'material-ui/Icon'
import IconButton from 'material-ui/IconButton';
import { withStyles, createStyleSheet } from 'material-ui/styles'

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
        const { classes, character } = this.props
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
                character={character}
                />
            </div>
        )
    }
}

const styleSheet = createStyleSheet('UpdateCharacter', theme => ({
  button: {
  },
}));

export default withStyles(styleSheet)(UpdateCharacter)
