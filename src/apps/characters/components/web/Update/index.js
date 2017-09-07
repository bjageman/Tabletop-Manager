import React from 'react'
import MdCreate from 'react-icons/lib/md/create'
import Dialog from '../Create/Dialog'

class UpdateCharacter extends React.Component {
    constructor(props){
        super(props)
        this.handleRequestClose = this.handleRequestClose.bind(this)
        this.state = { open: false }
    }

    handleRequestClose() {
        this.setState({
            open: false
        })
    }

    render(){
        const character = this.props.character
        return(
            <div>
            <MdCreate onClick = {() => this.setState({open: true})} />
            <Dialog
                open={this.state.open}
                onRequestClose={this.handleRequestClose}
                character={character}
                />
            </div>
        )
    }
}

export const styles = theme => ({
  button: {
  },
});

export default (UpdateCharacter)
