import React from 'react'
import {Button, Icon} from 'bjageman-react-toolkit'

import Dialog from './Dialog'

export const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

class CreateEntry extends React.Component {
    constructor(props){
        super(props)
        this.handleRequestClose = this.handleRequestClose.bind(this)
        this.state = {
            open: false,
            title: "",
        }
    }

    handleRequestClose() {
        this.setState({
            open: false
        })
    }

    render(){
        const campaign = this.props.campaign
        return(
            <div>
            { campaign ?
                <Button onClick = {() => this.setState({open: true})}>
                    <Icon name="create"  />
                </Button>
                :
                <Button
                    float
                    onClick = {() => this.setState({open: true})}>
                    <Icon name="add" />
                </Button>
            }

            <Dialog
                open={this.state.open}
                onRequestClose={this.handleRequestClose}
                title={this.state.title}
                campaign_data={campaign}
            />
            </div>
        )
    }
}

export default CreateEntry
