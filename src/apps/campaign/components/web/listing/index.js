import React from 'react'
import { Redirect } from 'react-router'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'
//material-ui
import { withStyles } from 'material-ui/styles';
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList';

import ToolBar from 'apps/base/components/web/ToolBar'
import CampaignListingToolBar from './ToolBar'

//toolkit
import Loading from 'apps/toolkit/Loading'
import InvisibleLink from 'apps/toolkit/InvisibleLink'

const defaultImage = "https://bravenewdungeon.files.wordpress.com/2013/08/ph-barroom-brawl.jpeg"

class CampaignListing extends React.Component {
    constructor(props){
        super(props)
        if (this.props.user){
            this.props.getUser({"access_token": this.props.user.access_token})
        }
    }

    render(){
        const user = this.props.user
        const loading = false
        const classes = this.props.classes
        if (user){
            return(
                <div>
                <ToolBar />
                <GridList cellHeight={180} >
                    <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                        <CampaignListingToolBar />
                    </GridListTile>
                    {user.campaigns ? user.campaigns.map((campaign, i) => (
                        <GridListTile key={campaign.id} className={classes.gridListTile}>
                            <img src={campaign.image.url || defaultImage} alt={campaign.name} />
                            <InvisibleLink to={"/campaign/" + campaign.slug}>

                            <GridListTileBar
                                title={campaign.name}
                                subtitle={
                                    <span>
                                        by: {campaign.owner}
                                    </span>
                                }
                            />
                            </InvisibleLink>
                        </GridListTile>

                    )): null }

                </GridList>
            </div>
            )
        }else if (loading){
            return(
                <Loading />
            )
        }else{
            return(
                <Redirect to="/" />
            )
        }
    }
}

export const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    background: theme.palette.background.paper,
},
  gridListTile: {
    minWidth: 320,
    display: 'flex',
    flexWrap: 'wrap',
},
  imageContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CampaignListing));


// <div>
//     <GridList cellHeight={180}>
//     { user.campaigns ? user.campaigns.map(campaign =>
//         <InvisibleLink to={"/campaign/" + campaign.slug}>
//         <GridListTile key={campaign.id}>
//             <img src={campaign.image} alt={campaign.name} />
//             <GridListTileBar
//                 title={campaign.name}
//                 subtitle={
//                     <span>
//                         by: {campaign.owner}
//                     </span>
//                 }
//                 />
//         </GridListTile>
//         </InvisibleLink>,
//     ) : <p>No Campaigns Listed. Please create.</p> }
//     </GridList>
// </div>
