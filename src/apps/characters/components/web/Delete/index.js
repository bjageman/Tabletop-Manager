import React from 'react'
import Dialog from './Dialog'
import Button from 'apps/toolkit/components/web/Button';
import Icon from 'apps/toolkit/components/web/Icon'

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
            <div style={{display: "inline"}}>
            <Button onClick = {() => this.setState({open: true})}>
                <Icon name="delete"  />
            </Button>
            <Dialog
                open={this.state.open}
                onRequestClose={this.handleRequestClose}
                character={this.props.character}
                />
            </div>
        )
    }
}

export default (DeleteCharacter)
