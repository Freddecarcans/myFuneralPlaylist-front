import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Register from './Register';
import { userLogged } from '../actions/auth.action';

const mapDispatchToProps = dispatch => bindActionCreators({ userLogged }, dispatch);

  export default connect(mapDispatchToProps, null)(Register);
