import { connect } from 'react-redux';
import FetchUser from './MyAccount';
import { bindActionCreators } from 'redux';
import { fetchUserSuccess, fetchUserError, fetchUserStart } from '../actions/user.action';


const mapStateToProps = state => ({
    loggedUser: state.auth,
    user: state.user.data,
    loading: state.user.loading
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchUserSuccess, fetchUserError, fetchUserStart
  }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FetchUser);
