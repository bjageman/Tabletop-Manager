import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'

import { LinearLoading, CleanHTML } from 'bjageman-react-toolkit'

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
                    <CleanHTML html={entry.content} />
                </div>
            )
        }else{
            return(
                <LinearLoading />
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JournalEntry)
