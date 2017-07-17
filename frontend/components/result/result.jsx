import React from 'react';

class Result extends React.Component{
  constructor(props){
    super(props);
    this.recommendations = this.props.recommendations
    this.firstRecommendation = this.firstRecommendation.bind(this);
    this.secondRecommendation = this.secondRecommendation.bind(this);
    this.thirdRecommendation = this.thirdRecommendation.bind(this);
  }

  firstRecommendation(){
    return this.recommendations[firstRecommendation].map((song, idx) => {
      <li key={idx}>
        {song.name}
      </li>
    });
  }

  secondRecommendation(){
    return this.recommendations[secondRecommendation].map((song, idx) => {
      <li key={idx}>
        {song.name}
      </li>
    });
  }

  thirdRecommendation(){
    return this.recommendations[thirdRecommendation].map((song, idx) => {
      <li key={idx}>
        {song.name}
      </li>
    });
  }

  render(){
    return(
      <div>
        <ul>
          {this.firstRecommendation}
          {this.secondRecommendation}
          {this.thirdRecommendation}
        </ul>
      </div>
    )
  }
}

export default Result
