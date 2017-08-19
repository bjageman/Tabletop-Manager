import * as actions from 'redux/actions';
import { bindActionCreators } from 'redux';

export function mapStateToProps(state) {
  const props = {
    campaign: state.campaign,
    user: state.user && state.user.id ? state.user : null,
    journal: state.journal,
    response: state.response,
  }
  return props
}

export function mapDispatchToProps (dispatch) {
  return bindActionCreators(actions, dispatch);
}
