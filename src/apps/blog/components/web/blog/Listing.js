import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

import data from 'apps/blog/mock-data/blog.json'

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 20,
  },
  root: {
    paddingTop: 20,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 800,
    height: 500,
    overflowY: 'auto',
  },
};

class BlogListing extends Component {
    renderBlogGrid(blog, i){
        return (
            <Link to={"/blog/" + i} >
                <GridTile
                  key={i}
                  title={blog.name}
                  subtitle={<span>by <b>{blog.owner}</b></span>}
                  actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                >
                  <img src={blog.img} />
                </GridTile>
            </Link>
        )
    }
    render(){
        if (data != null) {
            return (
                <div style={styles.root}>
                <GridList
                    cols={2}
                    cellHeight={180}
                    style={styles.gridList}
                    >
                {
                    data.map((blog, i) => (
                        this.renderBlogGrid(blog, i)
                    ))
                }
                </GridList>
                </div>
            )
        }else{
            return(<p>Loading Listing</p>)
        }
    }
}

export default BlogListing
