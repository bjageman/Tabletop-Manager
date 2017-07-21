import React from 'react'

import { withStyles, createStyleSheet } from 'material-ui/styles';
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import PlayerList from './PlayerList'

import data from 'mocks/campaign.json'

class CampaignDescription extends React.Component {
    createMarkup(data){
        return {__html: data};
    }

    render(){
        const campaign = data[0]
        const classes = this.props.classes
        return(
            <div id="campaign-description">
            <Grid container gutter={24}>
                <Grid item sm={12}>
                  <div className={classes.imageContainer}>
                      <img className={classes.image} src={campaign.image} alt={campaign.name} />
                  </div>
                </Grid>
                <Grid item sm={8} >
                    <Typography type="headline" component="h2">
                        {campaign.name}
                    </Typography>
                    <Typography component="body1">
                        <div dangerouslySetInnerHTML={this.createMarkup(campaign.wiki.entries[0].content)} />
                    </Typography>
                </Grid>
                <Grid item sm={4}>
                    <PlayerList players={campaign.players}/>
                </Grid>
            </Grid>
            </div>
        )
    }
}

const styleSheet = createStyleSheet('CampaignDescription', {
  container: {
    paddingTop: 20,
    paddingLeft: 20,
  },
  card: {
    marginTop: "1%",
    marginLeft: "3%",
    marginRight: "3%",
    marginBottom: "1%"
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
      width:"100%",
      maxHeight: 200,
      objectFit: "cover",
  }
});

export default withStyles(styleSheet)(CampaignDescription)
