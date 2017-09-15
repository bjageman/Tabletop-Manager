import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'

import {Button, Dialog, TextInput} from 'bjageman-react-toolkit'

class CreateMapDialog extends React.Component {
    onChange = (editorState) => {

    };

    handleFileUpload = (event) => {
        this.setState({ image: event.target.files[0] })
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSave = (event) => {
        const data = new FormData();
        data.append('file', this.state.image);
        data.append('name', this.state.name)
        this.props.saveMap({
            access_token: this.props.user.access_token,
            campaign_id: this.props.campaign.id,
            data: data,
        })
        this.props.onRequestClose()
    }

    render(){
        return(
            <Dialog
                open={this.props.open}
                onRequestClose={this.props.onRequestClose} >
                    Create Content Here:
                <input name="file" type="file" id="fileinput"  onChange={this.handleFileUpload}/>
                <TextInput
                  id="name"
                  label="Name"
                  name="name"
                  fullWidth
                  onChange={this.handleInputChange}
                />
                <Button
                    raised
                    color="primary"
                    onClick = {this.handleSave}>
                    Upload
                </Button>
            </Dialog>
        )
    }
}

export const styles = theme => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateMapDialog)
