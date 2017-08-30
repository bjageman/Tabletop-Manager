import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';

class CampaignWikiContent extends Component {
  createMarkup(html_data) {
      return {__html: html_data};
    }

  render() {
    const classes = this.props.classes
    const entry = this.props.entry
    return (
        <Grid container gutter={40}>
            <Grid item xs={12}>
              <Typography type="headline">
                {entry.name}
              </Typography>
              <Divider />
              <Typography type="body1">
                A subheader goes here
              </Typography>
            </Grid>
            <Grid item className={classes.body} md={8}>
              <Typography type="body1">
                <div dangerouslySetInnerHTML={this.createMarkup(entry.content)} />
              </Typography>
            </Grid>
            {this.props.children}
        </Grid>
    );
  }
}

export const styles = theme => ({
  body:{
  }
});

export default withStyles(styles)(CampaignWikiContent);
