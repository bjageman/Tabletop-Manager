import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'

import {Dialog, Button, TextInput, FileInput} from 'bjageman-react-toolkit'

import Editor from './Editor'

class CreateCharacterDialog extends React.Component {
    state = {image : null}
    handleFileUpload = (event) => {
        this.setState({ [event.target.name]: event.target.files[0] })
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSave = (event) => {
        const data = new FormData();
        data.append('image', this.state.image);
        data.append('sheet', this.state.sheet);
        data.append('name', this.state.name)
        this.props.createCharacter({
            access_token: this.props.user.access_token,
            campaign_id: this.props.campaign.id,
            character_id:   this.props.character ? this.props.character.id: null,
            data: data,
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
                <FileInput name="image" label="Character Image" onChange={this.handleFileUpload} />
                <TextInput
                  id="name"
                  name="name"
                  label="Name"
                  defaultValue={character.name || ""}
                  onChange={this.handleInputChange}
                />
            <FileInput name="sheet" label="Character Sheet" onChange={this.handleFileUpload} />
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
