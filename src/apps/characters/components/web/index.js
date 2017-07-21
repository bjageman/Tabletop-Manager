
import React from 'react'
import Divider from 'material-ui/Divider'

import data from 'mocks/characters.json'

import Read from './Read/'
import Create from './Create/'

class CampaignCharacters extends React.Component {
    render(){
        const characters = data

        return(
            <div id="campaign-characters">
                <Create />
                {characters.map((character, i) => (
                    <div className="character-card">
                        <Read character={character} />
                        <Divider />
                    </div>
                ))}
            </div>
        )
    }
}

export default CampaignCharacters
