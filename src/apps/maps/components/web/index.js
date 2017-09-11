import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'

import { LinearLoading, Grid, GridItem } from 'bjageman-react-toolkit'

import Read from './Read/.'
import Create from './Create/'

import { checkOwner } from 'utils'

class CampaignMaps extends Component {
    constructor(props){
        super(props)
        this.props.getMaps({ id: this.props.campaign.id })
    }

    render() {
        const is_owner = checkOwner(this.props.user, this.props.campaign)
        const campaignMaps = this.props.maps
        return (
          <div>
              { campaignMaps.fetching ? <LinearLoading /> : null }
              { is_owner ? <Create /> : null }
              <Grid>
                  { campaignMaps.entries && campaignMaps.entries.map((map, i) => (
                      <GridItem>
                          <Read
                              key = {i}
                              map = {map}
                              />
                      </GridItem>
                  ))}
              </Grid>
          </div>
        );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampaignMaps);
