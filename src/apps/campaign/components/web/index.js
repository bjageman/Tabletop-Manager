import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'
//material-ui
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

import CampaignTabBar from './TabBar'
import Description from './Description'
import Journal from 'apps/journal/components/web'
import Characters from 'apps/characters/components/web/'
import Wiki from 'apps/wiki/components/web/'
import Maps from 'apps/maps/components/web/'
import Calendar from 'apps/calendar/components/web/'

import Loading from 'apps/toolkit/Loading'

import { checkOwner } from 'apps/toolkit/utils'

class Campaign extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            index: 0,
        };
        if (this.props.match.params.id){
            this.props.getCampaign({
                id: this.props.match.params.id
            })
        }else if (this.props.user && this.props.user.campaigns.length > 0){
            this.props.getCampaign({
                id: this.props.user.campaigns[0].id
            })
        }else{
            console.log("Show Error Message")
        }

    }

    componentDidUpdate(props){
        if (this.props.campaign == null && this.props.user.campaigns.length > 0){
            this.props.getCampaign({
                id: this.props.user.campaigns[0].id
            })
        }
    }

    handleTabChange = (event, index) => {
        this.setState({ index });
    };

    render(){
        const classes = this.props.classes
        const index = this.state.index
        const user = this.props.user
        const campaign = this.props.campaign
        const is_owner = checkOwner(user, campaign)
        if (campaign){
            return(
                <Grid>
                    <CampaignTabBar handleTabChange={this.handleTabChange} index={index}/>
                    {index === 0 &&
                        <Description
                            campaign={campaign}
                            is_owner={is_owner} />}
                    {index === 1 &&
                        <Journal
                            journal={campaign.journal}
                            is_owner={is_owner} />}
                    {index === 2 &&
                        <Characters
                            characters={campaign.characters}
                            is_owner={is_owner} />}
                    {index === 3 &&
                        <Wiki
                            wiki={campaign.wiki}
                            is_owner={is_owner} />}
                    {index === 4 &&
                        <Maps
                            maps={campaign.maps}
                            is_owner={is_owner} />}
                    {index === 5 &&
                        <Calendar
                            calendar={campaign.calendar}
                            is_owner={is_owner} />}
                </Grid>
            )
        }else{
            return(
                <Loading />
            )
        }
    }
}

const styleSheet = createStyleSheet('Campaign', {
  container: {
    paddingTop: 20,
    paddingLeft: 20,
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styleSheet)(Campaign));
