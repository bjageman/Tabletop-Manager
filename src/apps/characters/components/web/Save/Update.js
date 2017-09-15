import React from 'react'
import Dialog from './Dialog'

import {Button, Icon} from 'bjageman-react-toolkit';

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
            <div style={{display: "inline"}}>
            <Button onClick = {() => this.setState({open: true})}>
                <Icon name="create"  />
            </Button>
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
