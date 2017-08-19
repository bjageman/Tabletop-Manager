import React, { Component } from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

import Create from './Create/'

class CampaignWiki extends Component {
  createMarkup(html_data) {
      return {__html: html_data};
    }

  render() {
    const classes = this.props.classes
    const campaign = this.props.campaign
    // const wiki = this.props.campaign.wiki
    return (
        <div className={classes.container}>
            <Typography type="headline" component="h2">
                {campaign.name}
            </Typography>
            { this.props.is_owner ? <Create /> : null }
        </div>

    );
  }
}

const styleSheet = createStyleSheet('CampaignWiki', {
  container:{
      marginTop: "2%",
      marginBottom: "1%",
      marginLeft:"5%",
      marginRight: "5%"
  },
  body:{
      marginTop:30
  }
});

export default withStyles(styleSheet)(CampaignWiki);
