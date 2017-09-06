import React from 'react'

class Button extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            active: false,
            hover: false,
         }
    }
    setStyle(){
        var style = styles.button
        style = this.props.raised ? { ...style, ...styles.raised } : { ...style, ...styles.flat }
        style =  this.state.active ? { ...style, ...style.active } : style
        style = this.state.hover ? { ...style, ...style.hover } : style
        return style
    }

    render(){
        const style = this.setStyle()
        return(
        <button
            onClick = {this.props.onClick}
            onMouseDown={() => this.setState({active: true})}
            onMouseUp={() => this.setState({active: false})}
            onMouseOver={() => this.setState({hover: true})}
            onMouseLeave={() => this.setState({active: false, hover: false})}
            style={style}
             >
            { this.props.children }
        </button>
        )
    }
}


const styles = {
    button: {
        cursor: "pointer",
        fontSize: "15px",
        fontFamily: ["roboto", "sansSerif"],
        paddingTop: "5px",
        paddingBottom: "5px",
        paddingLeft: "25px",
        paddingRight: "25px",
        margin: "5px",
        border: "none",
        transition: "all 300ms ease",
    },
    float: {

    },
    flat: {
        padding: 0,
        background: "none",
        color: "#2196F3",
        active: {
            color: "gray",
        },
        hover: {
            color: "gray",
        }
    },
    raised: {
        borderRadius: "5px",
        transition: "all 300ms ease",
        backgroundColor: "#2196F3",
        color: "white",
    active: {
        backgroundColor: "#ADEEE3",
        color: "#1f1f1f",
    },
    hover: {
        color: "white",
    }

    },

}

export default Button
