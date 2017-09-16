import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'

import Search from './Search'
import Save from '../save/'

class CampaignListingToolBar extends React.Component {
    render(){

        return(
            <div>
            <Search />
            <Save />

            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampaignListingToolBar);
