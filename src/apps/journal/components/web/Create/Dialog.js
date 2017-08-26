import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'
//Material-UI Imports
import Dialog, {DialogContent} from 'material-ui/Dialog'
import Slide from 'material-ui/transitions/Slide'

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Button from 'material-ui/Button';
import Input from 'material-ui/Input/Input';

import { withStyles } from 'material-ui/styles';

import { EditorState } from 'draft-js';
import Editor from './Editor'

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
            content: editorState.getCurrentContent().getPlainText(" "),
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
                fullScreen
                open={this.props.open}
                onRequestClose={this.props.onRequestClose}
                transition={<Slide direction="up" />}
            >
            <AppBar className={classes.appBar}>
                <Toolbar>
                  <IconButton color="contrast" onClick={this.props.onRequestClose} aria-label="Close">
                    <Icon>close</Icon>
                  </IconButton>
                  <Input
                      fullWidth
                      color="contrast"
                      id="name"
                      name="name"
                      label="Name"
                      placeholder="Entry Title"
                      defaultValue={entry.name || ""}
                      onChange={this.handleInputChange}
                    />
                  <Button color="contrast" onClick={this.handleSave}>
                    save
                  </Button>
                </Toolbar>
            </AppBar>
            <DialogContent className={classes.editor}>
                <Editor
                    entry = {entry}
                    editorState={this.state.editorState}
                    onChange={this.onChange}
                    handleInputChange={this.handleInputChange}
                    />
            </DialogContent>
            </Dialog>
        )
    }
}

export const styles = theme => ({  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
  title:{
    color: "white"
},
  editor: {
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(EntryCreateDialog))
