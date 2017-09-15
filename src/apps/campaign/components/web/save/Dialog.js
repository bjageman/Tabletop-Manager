import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'

import {Dialog, TextInput, FileInput, Button} from 'bjageman-react-toolkit'


class EntryCreateDialog extends React.Component {
    constructor(props){
        super(props)
        this.handleSave = this.handleSave.bind(this)
        this.state = {
            name: this.props.campaign_data ? this.props.campaign_data.name : "",
            image : null,
        }
    }

    handleFileUpload = (event) => {
        this.setState({ [event.target.name]: event.target.files[0] })
    }


    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSave() {
        const data = new FormData();
        data.append('image', this.state.image)
        data.append('name', this.state.name)
        this.props.saveCampaign({
            access_token: this.props.user.access_token,
            data: data,
            campaign_id: this.props.campaign_data ? this.props.campaign_data.id : null,
        })
        this.props.onRequestClose()
    }

    render(){
        return(
            <Dialog
                open={this.props.open}
                onRequestClose={this.props.onRequestClose} >
                <FileInput name="image" label="Campaign Image" onChange={this.handleFileUpload} />
                <TextInput
                  id="title"
                  label="Title"
                  name="name"
                  fullWidth
                  value={this.state.name}
                  onChange={this.handleInputChange}
                />
                <Button onClick={this.handleSave}>
                  Save Campaign
                </Button>
            </Dialog>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EntryCreateDialog)
