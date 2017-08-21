import * as actions from 'redux/actions';
import { bindActionCreators } from 'redux';

export function mapStateToProps(state) {
  const props = {
    campaign: state.campaign,
    user: state.user,
    journal: state.journal,
    characters: state.characters,
    maps: state.maps,
    calendar: state.calendar,
    response: state.response,
  }
  return props
}

export function mapDispatchToProps (dispatch) {
  return bindActionCreators(actions, dispatch);
}
