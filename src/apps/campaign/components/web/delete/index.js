import React from 'react'
import {Button, Icon} from 'bjageman-react-toolkit'

import Dialog from './Dialog'

class DeleteCampaign extends React.Component {
    state = { open: false }
    render(){
        return(
        <div>
            <Button onClick = {() => this.setState({open: true})}>
                <Icon name="delete"  />
            </Button>
            <Dialog
                campaign_delete={this.props.campaign}
                open={this.state.open}
                onRequestClose={() => this.setState({ open: false })}
                />
        </div>
        )
    }
}

export default (DeleteCampaign)
