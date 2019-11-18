import { connect } from 'react-redux';
import FetchUser from './FetchUser';

const mapStateToProps = state => ({
    loggedUser: state.auth,
});

export default connect(
    mapStateToProps,
    null
)(FetchUser);
