import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'
//Material-UI Imports
import Dialog, {DialogContent, DialogActions} from 'material-ui/Dialog'
import Typography from 'material-ui/Typography'
import Button from 'apps/toolkit/components/web/Button'

import { withStyles } from 'material-ui/styles';

import Editor from './Editor'

class CreateCharacterDialog extends React.Component {
    constructor(props){
        super(props)
        this.handleSave = this.handleSave.bind(this)
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSave() {
        this.props.createCharacter({
            access_token:   this.props.user.access_token,
            name:           this.state.name,
            campaign_id:    this.props.campaign.id,
            character_id:   this.props.character ? this.props.character.id: null,
        })
        this.props.onRequestClose()
    }

    render(){
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
                    <Editor
                        character = {character}
                        onChange = {this.handleInputChange} />
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

export const styles = theme => ({
});
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CreateCharacterDialog))
