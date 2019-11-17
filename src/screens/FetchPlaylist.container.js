import { connect } from 'react-redux'
import FetchPlaylist from './FetchPlaylist';

const mapStateToProps = state => ({
    loggedUser: state.auth
  })
  
export default connect(
    mapStateToProps,
    null
  )(FetchPlaylist);
  