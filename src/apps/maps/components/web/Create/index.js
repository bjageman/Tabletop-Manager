import React from 'react'
import {Button, Icon} from 'bjageman-react-toolkit';
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

export default CreateMap
