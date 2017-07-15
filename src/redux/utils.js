import * as actionCreators from './actions';
import { bindActionCreators } from 'redux';

export function mapStateToProps(state) {
  const props = {
    user: state.user,
  }
  return props
}

export function mapDispatchToProps (dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
