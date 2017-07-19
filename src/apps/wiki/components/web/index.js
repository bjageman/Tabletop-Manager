import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';

import CampaignWikiContent from './Content'
import CampaignWikiSideBar from './SideBar'

import data from 'mocks/campaign.json'

class CampaignWiki extends Component {
  createMarkup(html_data) {
      return {__html: html_data};
    }

  render() {
    const classes = this.props.classes
    const campaign = data[0]
    const wiki = campaign.wiki
    const entry = wiki.entries[0]
    return (
        <div className={classes.container}>
            <CampaignWikiContent entry={entry}>
                <CampaignWikiSideBar entries={wiki.entries} />
            </CampaignWikiContent>
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
