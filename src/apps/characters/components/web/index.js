import React from 'react'

//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'

import { GridList } from 'material-ui/GridList';
import Loading from 'apps/toolkit/Loading'

import Read from './Read/'
import Create from './Create/'

class CampaignCharacters extends React.Component {
    constructor(props){
        super(props)
        console.log("RUN ONCE")
        this.props.getCharacters({ id: this.props.campaign.id })
    }

    render(){
        const characters = this.props.characters
        return(
            <div id="campaign-characters">
                { characters && characters.fetching ? <Loading /> : null }
                { this.props.is_owner ? <Create /> : null }
                <GridList cellHeight={180}>
                    { characters.entries && characters.entries.map((character, i) => (
                        <Read character={character} />
                    ))}
                </GridList>
            </div>
        )

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampaignCharacters)
