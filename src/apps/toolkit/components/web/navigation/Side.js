import React from 'react'

class SideNav extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            active: false,
            hover: false,
         }
    }
    render(){
        return (
            <ul style={styles.list}>
                {this.props.children}
            </ul>
        )
    }
}

const styles = {
    list: {
        listStyleType: "none",
        margin: 0,
        padding: 0,
        overflow: "hidden",
        backgroundColor: "#333",
    },
    left: {
        float: "left",
    },
    right: {
        float: "right",
    },
    link: {
        cursor: "pointer",
        display: "block",
        color: "white",
        textAlign: "center",
        padding: "14px 16px",
        textDecoration: "none",
        hover: {
            backgroundColor: "#555",
            color: "white",
        }
    },

}

export default SideNav
