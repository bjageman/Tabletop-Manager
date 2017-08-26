import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'
//material-ui
import { withStyles } from 'material-ui/styles';

import Delete from '../Delete/'
import Update from '../Update/'
import Loading from 'apps/toolkit/Loading'

class JournalEntry extends React.Component {
    constructor(props){
        super(props)
        this.props.getJournalEntry({
            campaign_id: this.props.campaign.id,
            entry_id: this.props.match.params.journalId,
        })
    }

    createMarkup(data) {
        return {__html: data};
    }

    render(){
        const entry = this.props.journal.entry
        if (entry){
            return(
                <div className = "journal-entry">
                    <h1>{entry.name}</h1>
                    <h4>{entry.created}</h4>
                    <div dangerouslySetInnerHTML={this.createMarkup(entry.content)} />
                </div>
            )
        }else{
            return(
                <Loading />
            )
        }
    }
}

export const styles = theme => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(JournalEntry))
