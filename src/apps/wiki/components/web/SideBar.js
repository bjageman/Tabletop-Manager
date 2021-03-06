import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import List, { ListItem, ListItemText, ListSubheader } from 'material-ui/List';

class CampaignWikiSideBar extends Component {
  createMarkup(html_data) {
      return {__html: html_data};
    }

  render() {
    const classes = this.props.classes
    const entries = this.props.entries
    return (
        <Grid item md={4} >
            <List subheader={<ListSubheader>Pages</ListSubheader>}>
                {entries.map((entry, i) => (
                    <ListItem button>
                        <ListItemText
                        primary={entry.name}
                        />
                    </ListItem>
                ))}
            </List>
        </Grid>
    );
  }
}

export const styles = theme => ({  pages:{
      paddingLeft:30,
  },
  body:{
      marginTop:30
  }
});

export default withStyles(styles)(CampaignWikiSideBar);
