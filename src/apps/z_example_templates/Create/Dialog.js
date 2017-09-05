import React from 'react'
//Material-UI Imports
import Dialog, {DialogContent} from 'material-ui/Dialog'
import Typography from 'material-ui/Typography'
import Button from 'apps/toolkit/components/web/Button'
import { withStyles } from 'material-ui/styles';



class CreateDialog extends React.Component {
    constructor(props){
        super(props)
        this.handleSave = this.handleSave.bind(this)
    }

    onChange = (editorState) => {
        
    };

    handleInputChange = (event) => {
        
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSave() {
        
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
                <Button
                    raised
                    color="primary"
                    onClick = {this.handleSave}>
                    Save
                </Button>
            </DialogContent>
            </Dialog>
        )
    }
}

export const styles = theme => ({
});

export default withStyles(styles)(CreateDialog)
