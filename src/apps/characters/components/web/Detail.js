import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'

import { LinearLoading, CleanHTML, Text } from 'bjageman-react-toolkit'

class CharacterDetail extends React.Component {
    constructor(props){
        super(props)
        this.props.getCharacter({
            campaign_id: this.props.campaign.id,
            character_id: this.props.match.params.characterId,
        })
    }

    render(){
        const character = this.props.characters.entry
        if (character){
            return(
                <div>
                    <Text h1>{character.name}</Text>
                    { character.sheet ? <a href={character.sheet.url}>Character Sheet</a> : null }
                    { character.image ? <img src={character.image.url} alt={character.name} /> : null }
                </div>
            )
        }else{
            return(
                <LinearLoading />
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetail)
