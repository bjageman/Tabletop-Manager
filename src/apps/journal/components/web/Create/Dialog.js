import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'
//Material-UI Imports
import Dialog, { DialogContent, DialogActions } from 'material-ui/Dialog'
import Slide from 'material-ui/transitions/Slide'

import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';


import { withStyles } from 'material-ui/styles';

import { stateToHTML } from 'draft-js-export-html';
import { EditorState } from 'draft-js';

import Editor from 'apps/toolkit/editor/'

class EntryCreateDialog extends React.Component {
    constructor(props){
        super(props)
        this.handleSave = this.handleSave.bind(this)
        this.state = {
            editorState: EditorState.createEmpty(),
            name: this.props.entry ? this.props.entry.name : "",
            content: this.props.entry ? this.props.entry.content : ""
        };
    }

    onChange = (editorState) => {
        this.setState({
            editorState,
            content: stateToHTML(editorState.getCurrentContent()),
        });
    };

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSave() {
        this.props.saveJournalEntry({
            access_token: this.props.user.access_token,
            name:this.state.name,
            content:this.state.content,
            campaign_id: this.props.campaign.id,
            author_id: this.props.user.id,
            entry_id: this.props.entry ? this.props.entry.id: null,
        })
        this.props.onRequestClose()
    }

    render(){
        const classes = this.props.classes;
        const entry = this.props.entry || {name: "", content: ""}
        return(
            <Dialog
                open={this.props.open}
                onRequestClose={this.props.onRequestClose}
                transition={<Slide direction="up" />}
            >
            <DialogContent className={classes.editor}>
                <TextField
                  id="title"
                  label="Title"
                  name="name"
                  fullWidth
                  onChange={this.handleInputChange}
                />
                <Editor
                    entry = {entry}
                    editorState={this.state.editorState}
                    onChange={this.onChange}
                    handleInputChange={this.handleInputChange}
                    />
            </DialogContent>
            <DialogActions>
                <Button onClick={this.handleSave}>
                  Save As Draft
                </Button>
                <Button onClick={this.handleSave}>
                  POST
                </Button>
            </DialogActions>
            </Dialog>
        )
    }
}

export const styles = theme => ({
  dialog: {
    width: 600,
  },
  flex: {
    flex: 1,
  },
  title:{
    color: "white"
},
  editor: {
      width: 600
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(EntryCreateDialog))
