import React from 'react'
//Material-UI Imports
import Dialog, {DialogContent} from 'material-ui/Dialog'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import { withStyles, createStyleSheet } from 'material-ui/styles'



class CharacterDeleteDialog extends React.Component {
    constructor(props){
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
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

    handleDelete() {
        console.log("Delete Item")
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
                    Are you sure you want to delete?
                </Typography>
                <Button
                    raised
                    color="primary"
                    onClick = {this.handleDelete}>
                    Delete
                </Button>
                <Button
                    raised
                    onClick = {this.props.onRequestClose}>
                    Cancel
                </Button>
            </DialogContent>
            </Dialog>
        )
    }
}

const styleSheet = createStyleSheet('CharacterDeleteDialog', {

});

export default withStyles(styleSheet)(CharacterDeleteDialog)
