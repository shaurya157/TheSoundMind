import React from 'react';

class Result extends React.Component{
  constructor(props){
    super(props);
    this.firstRecommendation = this.firstRecommendation.bind(this);
    this.secondRecommendation = this.secondRecommendation.bind(this);
    this.thirdRecommendation = this.thirdRecommendation.bind(this);
  }

  firstRecommendation(){
    return this.props.firstRecommendation.map((song, idx) => (
      <li key={idx}>
        {song.name}
      </li>
    ));
  }

  secondRecommendation(){
    return this.props.secondRecommendation.map((song, idx) => (
      <li key={idx}>
        {song.name}
      </li>
    ));
  }

  thirdRecommendation(){
    return this.props.thirdRecommendation.map((song, idx) => (
      <li key={idx}>
        {song.name}
      </li>
    ));
  }

  render(){
    return(
      <div>
        <ul>
          {this.firstRecommendation()}
          {this.secondRecommendation()}
          {this.thirdRecommendation()}
        </ul>
      </div>
    )
  }
}

export default Result
