import { connect } from 'react-redux'
import Title from './Title';

const mapStateToProps = state => ({
    loggedUser: state.auth
  })
  
export default connect(
    mapStateToProps,
    null
  )(Title);