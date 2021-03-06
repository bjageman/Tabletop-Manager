import React from 'react'

//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'

import { GridList } from 'material-ui/GridList';
import Loading from 'apps/toolkit/Loading'

import Read from './Read/'
import Create from './Create/'

import { checkOwner } from 'apps/toolkit/utils'

class CampaignCharacters extends React.Component {
    constructor(props){
        super(props)

        this.props.getCharacters({ id: this.props.campaign.id })
    }

    render(){
        const characters = this.props.characters
        const is_owner = checkOwner(this.props.user, this.props.campaign)
        return(
            <div id="campaign-characters">
                { characters && characters.fetching ? <Loading /> : null }
                { is_owner ? <Create /> : null }
                <GridList>
                    { characters.entries && characters.entries.map((character, i) => (
                        <Read character={character} />
                    ))}
                </GridList>
            </div>
        )

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampaignCharacters)
