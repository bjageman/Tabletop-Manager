import React from 'react'
import Button from 'apps/toolkit/components/web/Button';

import Dialog from './Dialog'

class CreateMap extends React.Component {
    constructor(props){
        super(props)
        this.state = { open: false }
    }
    render(){
        return(
            <div>
            <Button
                raised color="primary"
                onClick = {() => this.setState({open: true})}
                >
                Add Map
            </Button>
            <Dialog
                open={this.state.open}
                onRequestClose={() => this.setState({ open: false })}
                />
            </div>
        )
    }
}

export default CreateMap
