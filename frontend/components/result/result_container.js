import { connect } from 'react-redux';
import Result from './result';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser,
  recommendations: session.recommendations
});

const mapDispatchToProps = dispatch  => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Result);
