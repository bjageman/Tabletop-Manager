import React from 'react'
import Dialog from '../Create/Dialog'
import MdCreate from 'react-icons/lib/md/create'

class UpdateJournal extends React.Component {
    constructor(props){
        super(props)
        this.handleRequestClose = this.handleRequestClose.bind(this)
        this.state = { open: false }
    }

    handleRequestClose() {
        this.setState({ open: false })
    }

    render(){
        return(
            <div>
            <MdCreate onClick = {() => this.setState({open: true})} />
            <Dialog
                entry={this.props.entry}
                open={this.state.open}
                onRequestClose={this.handleRequestClose}
                />
            </div>
        )
    }
}

export const styles = theme => ({
  button: {
  },
});

export default (UpdateJournal)
