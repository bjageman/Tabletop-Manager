import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'
//Material-UI Imports
import Dialog, {DialogContent, DialogActions} from 'material-ui/Dialog'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import { withStyles, createStyleSheet } from 'material-ui/styles'


class CharacterDeleteDialog extends React.Component {
    constructor(props){
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete() {
        this.props.deleteCharacter({
            campaign_id: this.props.campaign.id,
            character_id: this.props.character.id,
        })
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

const styleSheet = createStyleSheet('CharacterDeleteDialog', {

});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styleSheet)(CharacterDeleteDialog))
