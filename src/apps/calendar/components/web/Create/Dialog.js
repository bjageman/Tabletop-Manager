import React from 'react'
//Material-UI Imports
import Dialog, {DialogContent, DialogActions} from 'material-ui/Dialog'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import { withStyles, createStyleSheet } from 'material-ui/styles'



class CreateDialog extends React.Component {
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
        const classes = this.props.classes;
        return(
            <Dialog
                open={this.props.open}
                onRequestClose={this.props.onRequestClose}
            >
            <DialogContent>
                <Typography type="headline">
                    Create Content Here:
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button
                    raised
                    color="primary"
                    onClick = {this.handleSave}>
                    Save
                </Button>
                <Button onClick = {this.props.onRequestClose} color="primary">
                  Cancel
                </Button>
            </DialogActions>
            </Dialog>
        )
    }
}

const styleSheet = createStyleSheet('CreateDialog', {

});

export default withStyles(styleSheet)(CreateDialog)
