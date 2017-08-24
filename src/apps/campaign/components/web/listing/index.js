import React from 'react'
import { Redirect } from 'react-router'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'
//material-ui
import { withStyles } from 'material-ui/styles';
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList';

import Loading from 'apps/toolkit/Loading'

import InvisibleLink from 'apps/toolkit/InvisibleLink'

const defaultImage = "https://bravenewdungeon.files.wordpress.com/2013/08/ph-barroom-brawl.jpeg"

class CampaignListing extends React.Component {
    render(){
        const user = this.props.user
        const loading = false
        if (user){
            return(
                <GridList>
                    <GridListTile>
                        <h1>Create Template</h1>
                    </GridListTile>
                    {user.campaigns ? user.campaigns.map((campaign, i) => (

                        <GridListTile key={campaign.id}>
                            <img src={campaign.image || defaultImage} alt={campaign.name} />
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
            )
        }else if (loading || this.props.match.params.id){
            return(
                <Loading />
            )
        }else if (user){
            return (
                <h1>Create</h1>
            )
        }else{
            return(
                <Redirect to="/" />
            )
        }
    }
}

export const styles = theme => ({  container: {
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
