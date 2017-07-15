import React from 'react'

import { withStyles } from 'material-ui/styles';
import Card from 'material-ui/Card';


import CampaignTabBar from './TabBar'
import Description from './Description'
import Journal from 'apps/journal/components/web'
import Characters from 'apps/characters/components/web/'
import Maps from 'apps/maps/components/web/'

import styleSheet from './styles/campaign'


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
            <Card className={classes.card}>
                <CampaignTabBar handleTabChange={this.handleTabChange} index={index}/>
                {index === 0 &&
                    <Description />}
                {index === 1 &&
                    <Journal />}
                {index === 2 &&
                    <Characters />}
                {index === 4 &&
                    <Maps />}
            </Card>
        )
    }
}

export default withStyles(styleSheet)(Campaign)
