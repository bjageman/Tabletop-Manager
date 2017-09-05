import React from 'react'
//Material-UI Imports
import Dialog, {DialogContent, DialogActions} from 'material-ui/Dialog'
import Typography from 'material-ui/Typography'
import Button from 'apps/toolkit/components/web/Button'
import { withStyles } from 'material-ui/styles';



class CharacterDeleteDialog extends React.Component {
    constructor(props){
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
    }

    onChange = (editorState) => {
        
    };

    handleInputChange = (event) => {
        
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleDelete() {
        
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
            </DialogContent>
            <DialogActions>
                <Button onClick = {this.handleDelete} color="primary">
                  Delete
                </Button>
                <Button onClick = {this.props.onRequestClose} color="primary">
                  Cancel
                </Button>
            </DialogActions>
            </Dialog>
        )
    }
}

export const styles = theme => ({
});

export default withStyles(styles)(CharacterDeleteDialog)
