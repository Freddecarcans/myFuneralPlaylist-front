import { connect } from 'react-redux';
import MyContacts from './MyContacts';
import { bindActionCreators } from 'redux';
import { fetchUserSuccess, fetchUserError } from '../actions/user.action';

const mapStateToProps = state => ({
  loggedUser: state.auth,
  contactA: state.user.data.contactA,
  contactAName: state.user.data.contactAName,
  contactAFirstName: state.user.data.contactAFirstName,
  contactB: state.user.data.contactB,
  contactBName: state.user.data.contactBName,
  contactBFirstName: state.user.data.contactBFirstName
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

