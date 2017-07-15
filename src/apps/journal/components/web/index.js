import React from 'react'

import data from 'mocks/campaign.json'

import JournalEntry from './Entry/'

class CampaignJournal extends React.Component {
    render(){
        const campaign = data[0]
        const entries = campaign.journal.entries
        console.log(campaign)
        return(
            <div id="campaign-journal">
                {entries.map((entry, i) => (
                    <JournalEntry key={i} entry={entry} />
                ))}
            </div>
        )
    }
}

export default CampaignJournal
