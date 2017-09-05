import React, { Component } from 'react';
//redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'
//medium
import Button from 'apps/toolkit/components/web/Button';
import Snackbar from 'material-ui/Snackbar';
import Fade from 'material-ui/transitions/Fade';

class ErrorNote extends Component {
  state = {
    open: false,
  };

  handleClick = () => {
    this.setState({ open: true });
  };

  handleRequestClose = () => {
    this.props.clear()
    this.setState({ open: false });
  };

  render() {
    return (
        <Snackbar
          open={this.props.open}
          onRequestClose={this.handleRequestClose}
          transition={Fade}
          SnackbarContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{this.props.message}</span>}
        />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorNote);
