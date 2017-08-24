import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'
//Material-UI Imports
import Dialog, {DialogContent} from 'material-ui/Dialog'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui/styles';



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
        this.props.deleteCalendarEvent({
            campaign_id: this.props.campaign.id,
            event_id: this.props.event.id,
        })
        this.props.onRequestClose()
    }

    render(){
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

export const styles = theme => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CharacterDeleteDialog))
