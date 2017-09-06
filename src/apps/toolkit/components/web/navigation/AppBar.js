import React from 'react'

class AppBar extends React.Component {
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

export class AppBarItem extends React.Component {
    constructor(props){
        super(props)
        this.state = { hover: false }
    }
    render() {
        const position = this.props.right ? styles.right: styles.left
        const linkStyle = this.state.hover ? {...styles.link, ...styles.link.hover} : styles.link
        return(
            <li
                style={position}
                onClick={this.props.onClick}
                onMouseOver={() => this.setState({ hover: true })}
                onMouseLeave={() => this.setState({ hover: false })}
                >
                <a style={linkStyle}>{this.props.children}</a>
            </li>

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

export default AppBar
