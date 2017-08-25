import React from 'react'
import AppBar from 'material-ui/AppBar';
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'
//material-ui
import Tabs, { Tab } from 'material-ui/Tabs';
import { withStyles } from 'material-ui/styles';
import { blue } from 'material-ui/colors';

class CampaignTabs extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            index: this.props.campaign.index || 0
        }
    }
    onChange = (event, index) => {
        this.setState({index})
        this.props.changeCampaignTab({ index });
    };

    render(){
        const classes = this.props.classes
        return(
          <Tabs
              value={this.state.index}
              onChange={this.onChange}
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
