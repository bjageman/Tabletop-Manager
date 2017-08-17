import React from 'react'
import { withStyles, createStyleSheet } from 'material-ui/styles'

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

const styleSheet = createStyleSheet('EntryCreateEditor', {
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
    focus(){
        this.refs.editor.focus()
    }

    render() {
        const classes = this.props.classes
        return(
        <div>
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
