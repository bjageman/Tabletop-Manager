import React from 'react'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
import MdCopyright from 'react-icons/lib/md/copyright'

class Footer extends React.Component {
    render(){
        const classes = this.props.classes
        return(
            <div style={styles.footer}>
            <MdCopyright /> Tabletop Manager 2017
            </div>
        )
    }
}

const styles = {
    footer: {
      position: "absolute",
      right: 0,
      bottom: 0,
      left: 0,
      padding: "1rem",
      backgroundColor: "#efefef",
      textAlign: "center",
  }
}

export default Footer
