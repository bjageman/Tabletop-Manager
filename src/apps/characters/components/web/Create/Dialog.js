import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'

import {Dialog, Button} from 'bjageman-react-toolkit'

import Editor from './Editor'

class CreateCharacterDialog extends React.Component {
    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSave = () =>  {
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
                onRequestClose={this.props.onRequestClose}>
                { character.id ? "Edit " + character.name : "Create Character" }
                <Editor
                    character = {character}
                    onChange = {this.handleInputChange} />
                <Button
                    color="primary"
                    onClick = {this.handleSave}>
                    Save
                </Button>
                <Button onClick = {this.props.onRequestClose} color="primary">
                  Cancel
                </Button>
            </Dialog>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCharacterDialog)
