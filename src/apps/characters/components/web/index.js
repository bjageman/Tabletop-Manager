import React from 'react'

//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'

import { LinearLoading, Grid } from 'bjageman-react-toolkit'

import CharacterCard from './Card'
import SaveCharacter from './Save/'

import { checkOwner } from 'utils'

class CampaignCharacters extends React.Component {
    constructor(props){
        super(props)

        this.props.getCharacters({ id: this.props.campaign.id })
    }

    render(){
        const characters = this.props.characters
        const is_owner = checkOwner(this.props.user, this.props.campaign)
        return(
            <div>
            { characters && characters.fetching ? <LinearLoading /> : null }
            { is_owner ? <SaveCharacter /> : null }
            <Grid>
                { characters.entries && characters.entries.map((character, i) => (
                    <CharacterCard character={character} />
                ))}
            </Grid>
            </div>
        )

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampaignCharacters)
