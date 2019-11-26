import { connect } from 'react-redux';
import MyContacts from './MyContacts';
import { bindActionCreators } from 'redux';
import { fetchUserSuccess, fetchUserError } from '../actions/user.action';

const mapStateToProps = state => ({
  loggedUser: state.auth,
  contactA: state.user.data.contactA,
  contactB: state.user.data.contactB
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchUserSuccess,
    fetchUserError
  }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyContacts);

