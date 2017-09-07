import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'


class CampaignDashboardHeader extends React.Component {
    render(){

        const name = this.props.name
        const headerImage =  this.props.image
        return(
            <div>
            { headerImage && headerImage.url ?
                <img src={headerImage.url} alt={name}/>
            : null }
            {name}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampaignDashboardHeader);
