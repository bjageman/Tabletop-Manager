import React, { Component } from 'react';

import Dialog from './Dialog'
import Delete from '../Delete/'

import Card from 'apps/toolkit/components/web/Card'

class CampaignMapCard extends Component {
  constructor(props){
      super(props)
      this.handleRequestClose = this.handleRequestClose.bind(this)
      this.state = {
          open: false,
      }
  }
  handleRequestClose(){
      this.setState({open: false})
  }

  render() {
    const map = this.props.map
    return (
        <div>
        <Card>
            <Delete map={map} />
            <img onClick={() => this.setState({ open: true })} style={styles.map} src={map.image.url} alt={map.name} />
        </Card>
        <Dialog
            map={map}
            open={this.state.open}
            onRequestClose={this.handleRequestClose} />
        </div>
    );
  }
}

const styles = {
  container:{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  tilebar: {
    textAlign: "center",
    marginTop: 5,
    marginBottom: 5,
    fontSize: 14,
  },
  map: {
    width:"100%",
    // maxWidth: "400px",
    cursor: "pointer"
  },
}

export default CampaignMapCard;
