import React from 'react'

import { withStyles } from 'material-ui/styles';

import Delete from '../Delete/'
import Update from '../Update/'

class JournalEntry extends React.Component {
    constructor(props){
        super(props)
        this.handleRequestClose = this.handleRequestClose.bind(this)
        this.state = {
            open: false,
        }
    }
    handleRequestClose(){
        this.setState({open: false})
    }

    render(){
        const { entry, classes } = this.props
        return(
            <div className = "journal-entry">
                <h1>{this.props.match.params.journalId}</h1>
            </div>
        )
    }
}

export const styles = theme => ({

});

export default withStyles(styles)(JournalEntry)
