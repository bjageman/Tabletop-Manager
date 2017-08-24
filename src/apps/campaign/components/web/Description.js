import React from 'react'

import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography';

import PlayerList from './PlayerList'

class CampaignDescription extends React.Component {
    createMarkup(data){
        return {__html: data};
    }

    render(){
        const campaign = this.props.campaign
        const classes = this.props.classes
        return(
            <div id="campaign-description">
                <Grid item sm={12}>
                  <div>
                      <img className={classes.image} src={campaign.image} alt={campaign.name} />
                  </div>
                </Grid>
                <Grid item sm={8} >
                    <Typography type="headline" component="h2">
                        {campaign.name}
                    </Typography>
                    {campaign.wiki && campaign.wiki.entries.length > 0 ?
                    <Typography component="body1">
                        <div dangerouslySetInnerHTML={this.createMarkup(campaign.wiki.entries[0].content)} />
                    </Typography> : null }
                </Grid>
                <Grid item sm={4}>
                    {campaign.players ?
                    <PlayerList players={campaign.players}/>
                    : null }
                </Grid>
            </div>
        )
    }
}

export const styles = theme => ({  container: {

  },
  card: {
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"grey",
    height: 200,
  },
  image: {
    width:"100%",
    height: 200,
    objectFit: "cover",
  }
});

export default withStyles(styles)(CampaignDescription)
