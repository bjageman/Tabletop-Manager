import React from 'react'

import InvisibleLink from 'apps/base/components/web/links/InvisibleLink'
import { Card } from 'bjageman-react-toolkit'

import Edit from '../save/'
import Delete from '../delete/'

class CampaignCard extends React.Component {
    render(){
    const campaign = this.props.campaign
    const image = campaign.image ? campaign.image.url : 'https://bravenewdungeon.files.wordpress.com/2013/08/ph-barroom-brawl.jpeg'
    return(
        <Card>
            <InvisibleLink to={"/campaign/" + campaign.slug}>
                <img src={image} alt={campaign.name} style={styles.image} />
                <div>
                    <h1><b>{campaign.name}</b></h1>
                    <p>{campaign.owner.username}</p>
                </div>
            </InvisibleLink>
            <Edit campaign={campaign}/><Delete campaign={campaign}/>
        </Card>
        )
    }
}

const styles = {
    card : {
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        maxWidth: "300px",
        textAlign: "center",
        fontFamily: "roboto",
    },
    image: {
        width: "100%",
        maxHeight: "200px"
    }
}

export default CampaignCard
