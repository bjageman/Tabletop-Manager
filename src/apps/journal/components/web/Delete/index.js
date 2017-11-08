import React from 'react'
import MdDelete from 'react-icons/lib/md/delete'

import Dialog from './Dialog'

class DeleteCharacter extends React.Component {
    constructor(props){
        super(props)
        this.handleRequestClose = this.handleRequestClose.bind(this)
        this.state = {
            open: false,
        }
    }

    handleRequestClose() {
        this.setState({
            open: false
        })
    }

    render(){


        return(
            <div>
            <MdDelete onClick = {() => this.setState({open: true})} />
            <Dialog
                open={this.state.open}
                onRequestClose={this.handleRequestClose}
                entry={this.props.entry}
                />
            </div>
        )
    }
}

export default (DeleteCharacter)
