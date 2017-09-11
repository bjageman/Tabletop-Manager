import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'
import { push } from 'react-router-redux'
import  store  from 'redux/store'

import {Card, Button, CleanHTML} from 'bjageman-react-toolkit';

class CampaignDashboardJournal extends React.Component {
    render(){

        const entry = this.props.entry
        return(
        <Card>
            { entry ?
            <div style={styles.card}>
                <h2>Latest Entry</h2>
                <div>
                    <p>{entry.name}</p>
                    <p><CleanHTML html={entry.content.substring(0,140)} /></p>
                </div>
                <Button onClick={ () => store.dispatch(push( '/campaign/' + this.props.campaign.slug + "/journal/" + entry.slug )) } dense color="primary">
                    Read More
                </Button>
            </div>
                :
                    <p>No Journal Entries</p>
                }
        </Card>
        )
    }
}

const styles = {
    card: {
        width: "350px",
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampaignDashboardJournal);
