import React from 'react'

//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'

import Divider from 'material-ui/Divider'
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
                { characters.entries && characters.entries.map((character, i) => (
                    <div className="character-card" key={i}>
                        <Read character={character} />
                        <Divider />
                    </div>
                ))}
            </div>
        )

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampaignCharacters)
