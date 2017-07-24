import * as actionCreators from './actions';
import { bindActionCreators } from 'redux';

export function mapStateToProps(state) {
  const props = {
    user: state.user.data,
    journal: state.journal,
  }
  if (state.response.error != null){
      alert(state.response.error)
      state.response.error = null
  }
  return props
}

export function mapDispatchToProps (dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
