import React from 'react'
import Button from 'apps/toolkit/components/web/Button'
import Icon from 'apps/toolkit/components/web/Icon'
import Dialog from './Dialog'

class CreateCharacter extends React.Component {
    state = { open: false }

    render(){
        return(
            <div>
            <Button
                float
                onClick = {() => this.setState({open: true})}
                ><Icon name="add" /></Button>
            <Dialog
                open={this.state.open}
                onRequestClose={() => this.setState({ open: false })}
                />
            </div>
        )
    }
}

export default (CreateCharacter)
