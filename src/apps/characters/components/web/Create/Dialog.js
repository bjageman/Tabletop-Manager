import React from 'react'
//Material-UI Imports
import Dialog, {DialogContent, DialogActions} from 'material-ui/Dialog'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField';

import { withStyles, createStyleSheet } from 'material-ui/styles'

import Editor from './Editor'

class CreateDialogCharacter extends React.Component {
    constructor(props){
        super(props)
        this.handleSave = this.handleSave.bind(this)
    }

    onChange = (editorState) => {
        console.log("Text Change")
    };

    handleInputChange = (event) => {
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSave() {
        console.log("Saved Item")
        this.props.onRequestClose()
    }

    render(){
        const { classes, ...other } = this.props;
        const character = this.props.character || {name: "", subheader: "", descriptors: []}
        return(
            <Dialog
                open={this.props.open}
                onRequestClose={this.props.onRequestClose}
            >
            <DialogContent>
                <Typography type="headline">
                    { character.id ? "Edit " + character.name : "Create Character" }
                </Typography>
                <DialogContent>
                    <Editor character = {character}/>
                </DialogContent>
                <DialogActions>
                <Button
                    color="primary"
                    onClick = {this.handleSave}>
                    Save
                </Button>
                <Button onClick = {this.props.onRequestClose} color="primary">
                  Cancel
                </Button>
                </DialogActions>
            </DialogContent>
            </Dialog>
        )
    }
}

const styleSheet = createStyleSheet('CreateDialogCharacter', {

});

export default withStyles(styleSheet)(CreateDialogCharacter)
