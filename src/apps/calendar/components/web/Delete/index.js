import React from 'react'
import MdDelete from 'react-icons/lib/md/delete'

import Dialog from './Dialog'

class DeleteCharacter extends React.Component {
    state = { open: false }
    render(){
        return(
        <div>
            <MdDelete onClick = {() => this.setState({open: true})} />
            <Dialog
                event={this.props.event}
                open={this.state.open}
                onRequestClose={() => this.setState({ open: false })}
                />
        </div>
        )
    }
}

export default (DeleteCharacter)
