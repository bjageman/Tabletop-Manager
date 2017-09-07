import React from 'react'


import MdCopyright from 'react-icons/lib/md/copyright'

class Footer extends React.Component {
    render(){
        
        return(
            <div style={styles.footer}>
                <MdCopyright /> Tabletop Manager 2017
            </div>
        )
    }
}

const styles = {
    footer: {
    //   position: "absolute",
      right: 0,
      bottom: 0,
      left: 0,
      padding: "1rem",
      backgroundColor: "#efefef",
      textAlign: "center",
  }
}

export default Footer
