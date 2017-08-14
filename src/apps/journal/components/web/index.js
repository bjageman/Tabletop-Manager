import React from 'react'
import Icon from 'material-ui/Icon'
import Button from 'material-ui/IconButton';
import AddIcon from 'material-ui-icons/Add';

import Read from './Read/'
import Create from './Create/'

class CampaignJournal extends React.Component {
    render(){
        const journal = this.props.journal
        const is_owner = this.props.is_owner
        return(
            <div id="campaign-journal">
                {is_owner ? <Create /> : null }
                {journal.map((entry, i) => (
                    <Read key={entry.id} entry={entry} is_owner={is_owner}/>
                ))}
            </div>
        )
    }
}

export default CampaignJournal
