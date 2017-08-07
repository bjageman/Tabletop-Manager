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
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

import { withStyles, createStyleSheet } from 'material-ui/styles'

import { EditorState } from 'draft-js';
import EntryCreateEditor from './Editor'

const styleSheet = createStyleSheet('EntryCreateDialog', {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
  editor: {
      backgroundColor: "green",
  }
});

class EntryCreateDialog extends React.Component {
    constructor(props){
        super(props)
        this.handleSave = this.handleSave.bind(this)
        this.state = {
            editorState: EditorState.createEmpty(),
            name: "",
            content: "",
        };
    }

    onChange = (editorState) => {
        this.setState({
            editorState,
            content: editorState.getCurrentContent().getPlainText(" "),
        });
    };

    handleInputChange = (event) => {
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSave() {
        this.props.saveJournalEntry({
            name:this.state.name,
            content:this.state.content,
            campaign_id: 1,
            author_id: 1,
        })
        this.props.onRequestClose()
    }

    render(){
        const classes = this.props.classes;
        const name = this.props.name || "Create Entry"
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
                  <Typography type="name" color="inherit" className={classes.flex}>
                    {name}
                  </Typography>
                  <Button color="contrast" onClick={this.handleSave}>
                    save
                  </Button>
                </Toolbar>
            </AppBar>
            <DialogContent className={classes.editor}>
                <EntryCreateEditor
                    editorState={this.state.editorState}
                    onChange={this.onChange}
                    handleInputChange={this.handleInputChange}
                    />
            </DialogContent>
            </Dialog>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styleSheet)(EntryCreateDialog))
