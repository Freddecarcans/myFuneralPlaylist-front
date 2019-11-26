import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userLogged } from '../actions/auth.action';
import Connection from './Connection';

const mdtp = dispatch => bindActionCreators({ userLogged }, dispatch);

export default connect(null, mdtp)(Connection);