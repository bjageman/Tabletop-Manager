import React from 'react'
import Button from 'apps/toolkit/components/web/Button';
import Dialog from './Dialog'

class CreateCharacter extends React.Component {
    state = { open: false }

    render(){
        return(
            <div>
            <Button
                raised
                color="primary"
                onClick = {() => this.setState({open: true})}
                >
            Create Character
            </Button>
            <Dialog
                open={this.state.open}
                onRequestClose={() => this.setState({ open: false })}
                />
            </div>
        )
    }
}

export default (CreateCharacter)
