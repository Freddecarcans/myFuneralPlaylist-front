import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UpdateRegister from './UpdateRegister';
import { fetchUserSuccess, fetchUserError } from '../actions/user.action';

const mapStateToProps = state => ({
    loggedUser: state.auth,
    user: state.user.data
  })
const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchUserSuccess,
    fetchUserError
  }, dispatch)

  export default connect(mapStateToProps, mapDispatchToProps)(UpdateRegister);
