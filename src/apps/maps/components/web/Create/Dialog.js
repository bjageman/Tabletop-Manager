import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'

import {Button, Dialog} from 'bjageman-react-toolkit'

class CreateDialogEvent extends React.Component {
    constructor(props){
        super(props)
        this.handleUpload = this.handleUpload.bind(this)
        this.state ={
            name:"Placeholder Map",
            file:""
        }
    }

    onChange = (editorState) => {

    };

    handleInputChange = (event) => {
        const data = new FormData();
        data.append('file', event.target.files[0]);
        data.append('name', this.state.name);
        this.setState({
            file: data,
        })
    }

    handleUpload() {

        this.props.saveMap({
            access_token: this.props.user.access_token,
            name: this.state.name,
            author_id: this.props.user.id,
            campaign_id: this.props.campaign.id,
            file: this.state.file,
        })
        this.props.onRequestClose()
    }

    render(){
        return(
            <Dialog
                open={this.props.open}
                onRequestClose={this.props.onRequestClose} >

                    Create Content Here:

                <input name="file" type="file" id="fileinput"  onChange={this.handleInputChange}/>
                <Button
                    raised
                    color="primary"
                    onClick = {this.handleUpload}>
                    Upload
                </Button>
            </Dialog>
        )
    }
}

export const styles = theme => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateDialogEvent)
