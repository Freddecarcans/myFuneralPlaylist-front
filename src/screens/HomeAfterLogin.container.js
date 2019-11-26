import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HomeAfterLogin from './HomeAfterLogin';
import {
    fetchUserSuccess,
    fetchUserError,
    fetchUserStart
  } from '../actions/user.action';

  const mapStateToProps = state => ({
    loggedUser: state.auth,
    user: state.user.data,
    loading: state.user.loading
  });
  const mapDispatchToProps = dispatch =>
    bindActionCreators({
      fetchUserSuccess, 
      fetchUserError, 
      fetchUserStart
    }, dispatch)
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(HomeAfterLogin);