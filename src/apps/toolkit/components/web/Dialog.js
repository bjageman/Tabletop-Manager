import React from 'react'

class OutsideClickDetect extends React.Component {
    componentDidMount() {
        
        document.addEventListener('mousedown', this.handleClick);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick);
    }


    handleClick = (e) => {
        if (!this.node.contains(e.target)){
            this.props.onRequestClose()
        }
    }
    render() {
        return (
            <div ref={node => this.node = node}>
                {this.props.children}
            </div>
        );
    }
}

class Dialog extends React.Component {

    render(){
        if (this.props.open){
        return(
            <div
                id="modalDialog"
                style={styles.container}>
                <OutsideClickDetect
                    onRequestClose={() => this.props.onRequestClose()}
                    >
                <div style={styles.modal}>
                    <div style={styles.content} >
                        { this.props.children }
                    </div>
                </div>
                </OutsideClickDetect>
            </div>
        )
        }else{
            return null
        }
    }
}



var styles = {
  button: {
     backgroundColor: "green",
  },
  modal: {
      left:100,
  },
  container: {
    width:"100%",
    height: "100%",
    display: "block",
    position: "fixed",
    margin: "0 auto",
    zIndex: 1,
    left: 0,
    top: 0,
    overflow: "auto",
    backgroundColor: "rgba(0,0,0,0.4)",
},
  content: {
      clear:"both",
      float:"left",
      backgroundColor: "#fefefe",
      padding: 20,
      border: "1px solid #888",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
  },
  close: {
      color: "#aaa",
      float: "right",
      fontSize: 28,
      fontWeight: "bold",
  },
  backdrop: {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
  }
}

export default Dialog
