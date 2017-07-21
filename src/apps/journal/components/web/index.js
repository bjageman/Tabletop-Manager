import React from 'react'
import Icon from 'material-ui/Icon'
import Button from 'material-ui/IconButton';
import AddIcon from 'material-ui-icons/Add';
import data from 'mocks/campaign.json'

import Read from './Read/'
import Create from './Create/'

class CampaignJournal extends React.Component {
    render(){
        const campaign = data[0]
        const entries = campaign.journal.entries
        console.log(campaign)
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
