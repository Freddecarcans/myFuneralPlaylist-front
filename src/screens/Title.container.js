import { connect } from 'react-redux'
import Title from './Title';
import { bindActionCreators } from 'redux';
import { playlistFetched } from '../actions/tracks.action';


const mapStateToProps = state => ({
  loggedUser: state.auth
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    playlistFetched
  }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Title);