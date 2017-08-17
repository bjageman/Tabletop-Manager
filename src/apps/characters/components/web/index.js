import React from 'react'

//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'

import Divider from 'material-ui/Divider'

import Read from './Read/'
import Create from './Create/'

class CampaignCharacters extends React.Component {
    render(){
        const characters = this.props.characters

        return(
            <div id="campaign-characters">
                { this.props.is_owner ? <Create /> : null }
                {characters.map((character, i) => (
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
