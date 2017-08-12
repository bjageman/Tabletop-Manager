import React from 'react'
import Icon from 'material-ui/Icon'
import Button from 'material-ui/IconButton';
import AddIcon from 'material-ui-icons/Add';

import Read from './Read/'
import Create from './Create/'

class CampaignJournal extends React.Component {
    render(){
        const journal = this.props.journal
        return(
            <div id="campaign-journal">
                <Create />
                {journal.map((entry, i) => (
                    <Read key={entry.id} entry={entry} />
                ))}
            </div>
        )
    }
}

export default CampaignJournal
