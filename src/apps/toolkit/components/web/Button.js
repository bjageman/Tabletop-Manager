import React from 'react'

class Button extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            active: false,
            hover: false,
         }
    }
    render(){
        var buttonStyle =  this.state.active ? { ...styles.button, ...styles.button.active } : styles.button
        buttonStyle = this.state.hover ? { ...buttonStyle, ...styles.button.hover } : buttonStyle
        return(
        <button
            onClick = {this.props.onClick}
            onMouseDown={() => this.setState({active: true})}
            onMouseUp={() => this.setState({active: false})}
            onMouseOver={() => this.setState({hover: true})}
            onMouseLeave={() => this.setState({active: false, hover: false})}
            style={ buttonStyle }
             >
            { this.props.children }
        </button>
        )
    }
}


const styles = {
    button: {
      fontSize: "15px",
      fontFamily: ["roboto", "sansSerif"],
      paddingTop: "15px",
      paddingBottom: "15px",
      paddingLeft: "50px",
      paddingRight: "50px",
      margin: "20px",
      borderRadius: "5px",
      transition: "all 300ms ease",
      backgroundColor: "#1f1f1f",
      boxShadow: "inset 0 0 0 3px #ADEEE3",
      color: "#ADEEE3",
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
