import {connect} from 'react-redux';
import Ask from './ask'

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Ask);
