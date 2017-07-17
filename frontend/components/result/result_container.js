import { connect } from 'react-redux';
import Result from './result';

// TODO: map first second and third recommendations to this
const mapStateToProps = ({session, recommendations}) => ({
  currentUser: session.currentUser,
  firstRecommendation: recommendations.firstRecommendation,
  secondRecommendation: recommendations.secondRecommendation,
  thirdRecommendation: recommendations.thirdRecommendation
});

const mapDispatchToProps = dispatch  => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Result);
