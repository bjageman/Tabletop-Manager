import React from 'react'
import Button from 'apps/toolkit/components/web/Button'
import Icon from 'apps/toolkit/components/web/Icon'
import ReduxLink from 'apps/toolkit/components/web/links/Redux'

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
        const link = "journal/create"
        return(
            <ReduxLink campaignLink to={link} >
            <Button
                float
                onClick = {() => this.setState({open: true})}
                >
                <Icon name="add" />
            </Button>
            </ReduxLink>
        )
    }
}

export default CreateEntry
