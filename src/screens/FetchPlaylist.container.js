import { connect } from 'react-redux'
import FetchPlaylist from './FetchPlaylist';

const mapStateToProps = state => ({
    user: state.auth
  })
  
export default connect(
    mapStateToProps,
    null
  )(FetchPlaylist)