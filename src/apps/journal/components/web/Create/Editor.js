import React from 'react'
import { withStyles, createStyleSheet } from 'material-ui/styles'


import Editor from 'draft-js-plugins-editor';
import createHashtagPlugin from 'draft-js-hashtag-plugin';
import createLinkifyPlugin from 'draft-js-linkify-plugin';
import { EditorState } from 'draft-js';

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
      backgroundColor: "#e7e7e7",
  }
});

class EntryCreateEditor extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            editorState: EditorState.createEmpty(),
        };
    }

    onChange = (editorState) => {
        this.setState({
            editorState,
        });
    };
    render() {
        const classes = this.props.classes
        return(
            <div className={classes.editor} >
                <Editor
                    editorState={this.state.editorState}
                    onChange={this.onChange}
                    plugins={plugins}
                    />
            </div>
        )
    }
}

export default withStyles(styleSheet)(EntryCreateEditor)
