import React from 'react'
import {Button, Icon} from 'bjageman-react-toolkit'

import Dialog from './Dialog'

class DeleteCharacter extends React.Component {
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
            <Button onClick = {() => this.setState({open: true})} >
                <Icon name="delete" />
            </Button>
            <Dialog
                map={this.props.map}
                open={this.state.open}
                onRequestClose={this.handleRequestClose}
                />
            </div>
        )
    }
}

export default (DeleteCharacter)
