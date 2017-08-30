import React, { Component } from 'react';
//redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'

import ErrorNotification from './Error'
import SuccessNotification from './Success'


class Notifications extends Component {

  render() {
      const error = this.props.response.error
      const success = this.props.response.success
      return (
          <div>
            <ErrorNotification open={error ? true: false} message={error} />
            <SuccessNotification open={success ? true: false} message={success} />
          </div>
        );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
