import React from 'react'

class Card extends React.Component {
    render(){
    return(
        <div key={this.props.key} style={styles.card}>
            {this.props.children}
        </div>
        )
    }
}

const styles = {
    card : {
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        textAlign: "center",
        fontFamily: "roboto",
    },
    image: {
        maxWidth: "300px",
        width: "100%",
        maxHeight: "200px"
    }
}

export default Card
