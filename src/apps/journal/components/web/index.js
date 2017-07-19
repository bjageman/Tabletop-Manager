import React from 'react'
import Icon from 'material-ui/Icon'
import Button from 'material-ui/IconButton';
import AddIcon from 'material-ui-icons/Add';
import data from 'mocks/campaign.json'

import JournalEntry from './Entry/'
import CreateEntry from './Create/'

class CampaignJournal extends React.Component {
    render(){
        const campaign = data[0]
        const entries = campaign.journal.entries
        console.log(campaign)
        return(
            <div id="campaign-journal">
                <CreateEntry />
                {entries.map((entry, i) => (
                    <JournalEntry key={i} entry={entry} />
                ))}
            </div>
        )
    }
}

export default CampaignJournal
