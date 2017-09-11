import React from 'react'

//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'

import { LinearLoading, Grid } from 'bjageman-react-toolkit'

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
            <div>
            { characters && characters.fetching ? <LinearLoading /> : null }
            { is_owner ? <Create /> : null }
            <Grid>
                { characters.entries && characters.entries.map((character, i) => (
                    <Read character={character} />
                ))}
            </Grid>
            </div>
        )

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampaignCharacters)
