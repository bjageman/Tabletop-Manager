import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'

import TextInput from 'apps/toolkit/components/web/forms/TextInput'

import Save from '../save/'

class CampaignListingToolBar extends React.Component {
    render(){
        
        return(
            <div>
            <Save />
            <TextInput
                placeholder="Search Campaigns"
                inputProps={{
                    'aria-label': 'Description',
                }}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampaignListingToolBar);
