import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Grid from 'material-ui/Grid';
import IconButton from 'material-ui/IconButton';
import SvgIcon from 'material-ui/SvgIcon';
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
        // key={i}
        // title={blog.name}
        // subtitle={<span>by <b>{blog.owner}</b></span>}
        return (
            <Link to={"/blog/" + i} >
                <Grid item xs={12}>

                >
                  <img src={blog.img} />
                </Grid>
            </Link>
        )
    }
    render(){
        if (data != null) {
            return (
                <div style={styles.root}>
                <Grid container>
                {
                    data.map((blog, i) => (
                        this.renderBlogGrid(blog, i)
                    ))
                }
            </Grid>
                </div>
            )
        }else{
            return(<p>Loading Listing</p>)
        }
    }
}

export default BlogListing
