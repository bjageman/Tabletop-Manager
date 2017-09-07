import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'

import Grid, { GridItem } from 'apps/toolkit/components/web/Grid'
import Loading from 'apps/toolkit/components/web/loading/Linear'
import Read from './Read/.'
import Create from './Create/'


class CampaignMaps extends Component {
    constructor(props){
        super(props)
        this.props.getMaps({ id: this.props.campaign.id })
    }

    render() {
        const campaignMaps = this.props.maps
        return (
          <div>
              { campaignMaps.fetching ? <Loading /> : null }
              { this.props.is_owner ? <Create /> : null }
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
