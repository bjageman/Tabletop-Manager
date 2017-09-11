import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'

import { LinearLoading } from 'bjageman-react-toolkit'
import ListItem from './List/'
import Create from './Create/'

import { checkOwner } from 'utils'

class Journal extends React.Component {
    constructor(props){
        super(props)
        this.props.getJournal({ id: this.props.campaign.id })
    }

    render(){
        const is_owner = checkOwner(this.props.user, this.props.campaign)
        const journal = this.props.journal
        if (journal){
            return(
                <div id="campaign-journal">
                    { journal.fetching ? <LinearLoading /> : null }
                    { is_owner ? <Create /> : null }
                    {journal.entries && journal.entries.map((entry, i) => (
                        <ListItem key={entry.id} entry={entry} is_owner={is_owner}/>
                    ))}
                </div>
            )
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Journal)
