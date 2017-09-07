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
                event={this.props.event}
                open={this.state.open}
                onRequestClose={this.handleRequestClose}
                />
            </div>
        )
    }
}

export const styles = theme => ({
  button: {
      color: "red",
  },
});

export default (DeleteCharacter)
