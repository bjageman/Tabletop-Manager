import React from 'react'
//Material-UI Imports
import Dialog from 'apps/toolkit/components/web/Dialog'

import Button from 'apps/toolkit/components/web/Button'




class CreateDialog extends React.Component {
    constructor(props){
        super(props)
        this.handleSave = this.handleSave.bind(this)
    }

    onChange = (editorState) => {

    };

    handleInputChange = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSave() {

        this.props.onRequestClose()
    }

    render(){
        return(
            <Dialog
                open={this.props.open}
                onRequestClose={this.props.onRequestClose} >
                
                    Create Content Here:
                
                <Button
                    raised
                    color="primary"
                    onClick = {this.handleSave}>
                    Save
                </Button>
            </Dialog>
        )
    }
}

export const styles = theme => ({
});

export default (CreateDialog)
