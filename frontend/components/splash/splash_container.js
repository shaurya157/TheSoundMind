import {connect} from 'react-redux';
import Splash from './splash'
import {login} from '../../actions/session_actions'

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser,
  errors: session.errors
})

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
