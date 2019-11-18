import { connect } from 'react-redux'
import FetchPlaylist from './FetchPlaylist';
import { bindActionCreators } from 'redux';
import { playlistFetched, playlistFetch, playlistFetchError, trackDeleted } from '../actions/tracks.action';

const mapStateToProps = state => ({
  loggedUser: state.auth,
  tracks: state.tracks.data,
  loading: state.tracks.loading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    playlistFetched,
    playlistFetch,
    playlistFetchError,
    trackDeleted
  }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FetchPlaylist);
