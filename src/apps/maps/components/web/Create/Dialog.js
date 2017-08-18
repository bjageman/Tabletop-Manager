import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'
//Material-UI Imports
import Dialog, {DialogContent, DialogActions} from 'material-ui/Dialog'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import { withStyles, createStyleSheet } from 'material-ui/styles'



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
        console.log("Text Change")
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
                onRequestClose={this.props.onRequestClose}
            >
            <DialogContent>
                <Typography type="headline">
                    Create Content Here:
                </Typography>
                <input name="file" type="file" id="fileinput"  onChange={this.handleInputChange}/>
            </DialogContent>
            <DialogActions>
                <Button
                    raised
                    color="primary"
                    onClick = {this.handleUpload}>
                    Upload
                </Button>
            </DialogActions>
            </Dialog>
        )
    }
}

const styleSheet = createStyleSheet('CreateDialogEvent', {

});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styleSheet)(CreateDialogEvent))
