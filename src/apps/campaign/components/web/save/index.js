import React from 'react'
import Button from 'apps/toolkit/components/web/Button';



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
        
        return(
            <div>
            <Button
                raised
                color="primary"
                
                onClick = {() => this.setState({open: true})}
                >
                Create Campaign
            </Button>
            <Dialog
                open={this.state.open}
                onRequestClose={this.handleRequestClose}
                title={this.state.title}
            />
            </div>
        )
    }
}

export default (CreateEntry)
