import {connect} from 'react-redux';
import { ask } from '../../actions/ask_actions';
import Ask from './ask'

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser
})

const mapDispatchToProps = dispatch => ({
  ask: (mood, location, activity, user_id) => dispatch(ask(mood, location, activity, user_id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Ask);
