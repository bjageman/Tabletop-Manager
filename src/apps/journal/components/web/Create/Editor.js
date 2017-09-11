import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'

import { stateToHTML } from 'draft-js-export-html'
import { EditorState, convertFromHTML, ContentState } from 'draft-js'

import ReduxLink from 'apps/toolkit/components/web/links/Redux'
import TextInput from 'apps/toolkit/components/web/forms/TextInput'
import Button from 'apps/toolkit/components/web/Button'
import Editor from 'apps/toolkit/components/web/editor/'
import Grid from 'apps/toolkit/components/web/Grid'

class CreateEntryEditor extends React.Component {
    constructor(props){
        super(props)
        this.handleSave = this.handleSave.bind(this)
        if (this.props.entry) {
            const blocksFromHTML = convertFromHTML(this.props.entry.content)
            const state = ContentState.createFromBlockArray(
                blocksFromHTML.contentBlocks,
                blocksFromHTML.entityMap
            )
            this.state = {
                editorState: EditorState.createWithContent(state),
                name: this.props.entry.name,
                content: this.props.entry.content,
            }
        }else{
            this.state = {
                editorState: EditorState.createEmpty(),
                name: "",
                content: "",
            }
        }
    }

    onChange = (editorState) => {
        this.setState({
            editorState,
            content: stateToHTML(editorState.getCurrentContent()),
        })
    }

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
    }

    render(){
        const entry = this.props.entry || {name: "", content: ""}
        return(
            <Grid>
                <div style={styles.container}>
                    <div style={styles.titleRow}>
                        <div style={styles.title}>
                            <TextInput
                              id="title"
                              label="Title"
                              name="name"
                              fullWidth
                              value={this.state.name}
                              onChange={this.handleInputChange} />
                        </div>
                        <div style={styles.buttons}>
                            <Button raised onClick={this.handleSave}>
                              POST
                            </Button>
                            <ReduxLink to=".">
                                <Button>
                                    Cancel
                                </Button>
                            </ReduxLink>
                        </div>
                    </div>
                    <Editor
                        entry = {entry}
                        editorState={this.state.editorState}
                        onChange={this.onChange}
                        handleInputChange={this.handleInputChange}
                        />

                    <hr />
                </div>
            </Grid>

        )
    }
}

const styles ={
    container: {
        width: "90%",
    },
    titleRow: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    title: {
        width: "200px",
        // backgroundColor: "red",
    },
    buttons: {
        textAlign: "left",
        // backgroundColor: "blue",
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEntryEditor)
