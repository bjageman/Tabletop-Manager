import React from 'react'
import { withStyles, createStyleSheet } from 'material-ui/styles'

import Grid from 'material-ui/Grid'
import Input from 'material-ui/Input/Input';
import InputLabel from 'material-ui/Input/InputLabel';
import FormControl from 'material-ui/Form/FormControl';
import Typography from 'material-ui/Typography'

import Editor from 'draft-js-plugins-editor';
import createHashtagPlugin from 'draft-js-hashtag-plugin';
import createLinkifyPlugin from 'draft-js-linkify-plugin';

const hashtagPlugin = createHashtagPlugin();
const linkifyPlugin = createLinkifyPlugin();

const plugins = [
  hashtagPlugin,
  linkifyPlugin,
];

const styleSheet = createStyleSheet('EntryCreateDialog', {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
  editor: {
      boxSizing: "border-box",
      border: "1px solid #ddd",
      cursor: "text",
      padding: "16px",
      borderRadius: "2px",
      marginBottom: "2em",
      boxShadow: "inset 0px 1px 8px -3px #ABABAB",
      backgroundColor: "#fefefe",
      minHeight:140
    }

});

class EntryCreateEditor extends React.Component {
    constructor(props){
        super(props)
    }

    focus(){
        this.refs.editor.focus()
    }

    render() {
        const classes = this.props.classes
        return(
        <div>
            <FormControl className={classes.input}>
                <InputLabel htmlFor="name">Name</InputLabel>
                <Input id="title" name="title" value={this.props.title} onChange={this.props.handleInputChange} />
            </FormControl>
            <Typography type="caption" > Content </Typography>
            <div className={classes.editor} onClick={this.focus.bind(this)}>
                <Editor
                    editorState={this.props.editorState}
                    onChange={this.props.onChange}
                    plugins={plugins}
                    spellCheck={true}
                    ref="editor"
                    />
            </div>
        </div>
        )
    }
}

export default withStyles(styleSheet)(EntryCreateEditor)
