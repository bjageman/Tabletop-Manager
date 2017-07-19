import React from 'react'

import { withStyles, createStyleSheet } from 'material-ui/styles';
import Grid from 'material-ui/Grid';


import CampaignTabBar from './TabBar'
import Description from './Description'
import Journal from 'apps/journal/components/web'
import Characters from 'apps/characters/components/web/'
import Wiki from 'apps/wiki/components/web/'
import Maps from 'apps/maps/components/web/'

class Campaign extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            index: this.props.match.params.index || 0,
        };
    }

    handleTabChange = (event, index) => {
        console.log(index)
        this.setState({ index });
    };

    render(){
        const classes = this.props.classes;
        const index = parseInt(this.state.index, 10) || 0
        console.log(index)
        return(
            <Grid>
                <CampaignTabBar handleTabChange={this.handleTabChange} index={index}/>
                {index === 0 &&
                    <Description />}
                {index === 1 &&
                    <Journal />}
                {index === 2 &&
                    <Characters />}
                {index === 3 &&
                    <Wiki />}
                {index === 4 &&
                    <Maps />}
            </Grid>
        )
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

export default withStyles(styleSheet)(Campaign)
