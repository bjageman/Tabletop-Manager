import React from 'react'

import Typography from 'material-ui/Typography'

import Editor from 'draft-js-plugins-editor';
import createHashtagPlugin from 'draft-js-hashtag-plugin';
import createLinkifyPlugin from 'draft-js-linkify-plugin';
import createInlineToolbarPlugin from 'draft-js-inline-toolbar-plugin';

import 'draft-js-hashtag-plugin/lib/plugin.css'; // eslint-disable-line import/no-unresolved
import 'draft-js-inline-toolbar-plugin/lib/plugin.css'; // eslint-disable-line import/no-unresolved

const hashtagPlugin = createHashtagPlugin();
const linkifyPlugin = createLinkifyPlugin();
const inlineToolbarPlugin = createInlineToolbarPlugin();

const { InlineToolbar } = inlineToolbarPlugin;

const plugins = [
  hashtagPlugin,
  linkifyPlugin,
  inlineToolbarPlugin
];

const styles = {
  editor: {
      boxSizing: "border-box",
      border: "1px solid #ddd",
      cursor: "text",
      borderRadius: "2px",
      marginBottom: "2em",
      boxShadow: "inset 0px 1px 8px -3px #ABABAB",
      backgroundColor: "#fefefe",
      minHeight:140
    }

};

class EntryCreateEditor extends React.Component {
    focus(){
        this.refs.editor.focus()
    }

    render() {
        return(
        <div style={styles.editor} onClick={this.focus.bind(this)}>
            <Editor
                editorState={this.props.editorState}
                onChange={this.props.onChange}
                plugins={plugins}
                spellCheck={true}
                ref="editor"
                />
            <InlineToolbar />
        </div>
        )
    }
}

export default EntryCreateEditor
