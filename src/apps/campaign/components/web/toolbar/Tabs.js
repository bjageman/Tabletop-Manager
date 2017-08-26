import React from 'react'
import AppBar from 'material-ui/AppBar';
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'
import { push } from 'react-router-redux'
import  store  from 'redux/store'
//material-ui
import Tabs, { Tab } from 'material-ui/Tabs';
import { withStyles } from 'material-ui/styles';
import { blue } from 'material-ui/colors';

const tabs = ['journal', 'characters', 'maps', 'calendar']

class CampaignTabs extends React.Component {
    constructor(props){
        super(props)
        this.state = {value : 0}
    }

    handleChange = (event, value) => {
        this.setState({ value });
        store.dispatch(push('/campaign/' + this.props.campaign.slug + '/' + tabs[value]))
    };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };

    render(){
        const classes = this.props.classes
        return(
          <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="contrast"
              fullWidth
              >
            <Tab label="Journal" />
            <Tab label="Characters" />
            <Tab label="Maps" />
            <Tab label="Calendar" />
          </Tabs>
        )
    }
}

export const styles = theme => ({  tabbar: {
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CampaignTabs));
