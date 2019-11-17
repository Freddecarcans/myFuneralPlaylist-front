import { connect } from 'react-redux'
import MyContacts from './MyContacts';

const mapStateToProps = state => ({
    loggedUser: state.auth
  })
  
export default connect(
    mapStateToProps,
    null
  )(MyContacts);