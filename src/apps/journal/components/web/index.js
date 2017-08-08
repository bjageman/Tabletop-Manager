import React from 'react'
import Icon from 'material-ui/Icon'
import Button from 'material-ui/IconButton';
import AddIcon from 'material-ui-icons/Add';

import Read from './Read/'
import Create from './Create/'

class CampaignJournal extends React.Component {
    render(){
        const entries = this.props.journal.entries
        return(
            <div id="campaign-journal">
                <Create />
                {entries.map((entry, i) => (
                    <Read key={i} entry={entry} />
                ))}
            </div>
        )
    }
}

export default CampaignJournal
