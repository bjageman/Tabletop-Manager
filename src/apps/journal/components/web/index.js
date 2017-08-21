import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'

import Loading from 'apps/toolkit/Loading'
import Read from './Read/'
import Create from './Create/'

class CampaignJournal extends React.Component {
    constructor(props){
        super(props)
        this.props.getJournal({ id: this.props.campaign.id })
    }

    render(){
        const journal = this.props.journal
        const is_owner = this.props.is_owner
        return(
            <div id="campaign-journal">
                { journal.fetching ? <Loading /> : null }
                { is_owner ? <Create /> : null }
                {journal.entries && journal.entries.map((entry, i) => (
                    <Read key={entry.id} entry={entry} is_owner={is_owner}/>
                ))}
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CampaignJournal)
