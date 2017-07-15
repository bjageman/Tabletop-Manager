
import React from 'react'
import Divider from 'material-ui/Divider'

import data from 'mocks/characters.json'

import CharacterEntry from './Entry/'

class CampaignCharacters extends React.Component {
    render(){
        const characters = data

        return(
            <div id="campaign-characters">
                {characters.map((character, i) => (
                    <div class="character-card">
                        <CharacterEntry character={character} />
                        <Divider />
                    </div>
                ))}
            </div>
        )
    }
}

export default CampaignCharacters
