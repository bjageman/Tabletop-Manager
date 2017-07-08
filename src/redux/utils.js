import * as actionCreators from './actions';
import { bindActionCreators } from 'redux';

export function mapStateToProps(state) {
  const props = {
    blog: state.blog.blog,
    user: state.user,
    tmp_post: state.blog.tmp_post
  }
  return props
}

export function mapDispatchToProps (dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
