import React from 'react'
import Button from 'apps/toolkit/components/web/Button'
import Icon from 'apps/toolkit/components/web/Icon'

import Editor from './Editor'

class CreateEntry extends React.Component {
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

            {this.state.open ? <Editor onRequestClose={this.handleRequestClose} /> :
            <Button
                float
                onClick = {() => this.setState({open: true})}
                >
                <Icon name="add" />
            </Button>
            }
            </div>
        )
    }
}

export default CreateEntry
