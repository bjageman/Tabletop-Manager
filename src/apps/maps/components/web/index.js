import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'
//material-ui
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';

import Loading from 'apps/toolkit/Loading'
import Read from './Read/.'
import Create from './Create/'


class CampaignMaps extends Component {
    constructor(props){
        super(props)
        this.props.getMaps({ id: this.props.campaign.id })
    }

    render() {
        const classes = this.props.classes
        const campaignMaps = this.props.maps
        return (
          <div>
              { campaignMaps.fetching ? <Loading /> : null }
              <Grid className={classes.container} >
                  { this.props.is_owner ? <Create /> : null }
                  { campaignMaps.entries && campaignMaps.entries.map((map, i) => (
                    <Read
                        key = {i}
                        map = {map}
                        />
                  ))}

              </Grid>
          </div>
        );
  }
}

export const styles = theme => ({
  container:{
      marginTop: "1%",
      marginBottom: "1%",
      marginLeft:"5%",
      marginRight: "5%"
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CampaignMaps));
