import React from 'react';

class Result extends React.Component{
  constructor(props){
    super(props);
    this.nextFive = this.nextFive.bind(this);
    this.showSongs = this.showSongs.bind(this);
    this.state = { songsShowing: []};
    this.counter = 0;
  }

  nextFive(){
    let firstLength = this.props.firstRecommendation.length
    let secondLength = this.props.secondRecommendation.length
    let thirdLength = this.props.thirdRecommendation.length

    let songsToAdd = []
    for(let i = 5; i > 0; i-- ){
      if(this.counter < firstLength){
        // this.setState((prevState) => ({songsShowing: prevState.songsShowing.concat(this.props.firstRecommendation[this.counter])}));
        // this.setState({songsShowing: this.state.songsShowing.concat(this.props.firstRecommendation[this.counter])});
        songsToAdd.push(this.props.firstRecommendation[this.counter]);
      } else if (this.counter < secondLength) {
        // this.setState({songsShowing: this.state.songsShowing.concat(this.props.secondRecommendation[this.counter - firstLength])});
        songsToAdd.push(this.props.secondRecommendation[this.counter - firstLength]);
      } else {
        // this.setState({songsShowing: this.state.songsShowing.concat(this.props.thirdRecommendation[this.counter - firstLength - secondLength])});
        songsToAdd.push(this.props.thirdRecommendation[this.counter - (firstLength + secondLength)]);
      }

      this.counter += 1;
    }

    
    this.setState({songsShowing: this.state.songsShowing.concat(songsToAdd)});
  }

  showSongs(){
    return this.state.songsShowing.map((song, idx) => (
      <tr key={idx}>
        <td className="result-song">{song.name}</td>
        <td className="result-option">
          <span className="play-pause" onclick="play()">
            <i className="material-icons init md-36">play_circle_outline</i>
            <i className="material-icons hover md-36">play_circle_filled</i>
          </span>
          <i className="material-icons md-24" id="thumbup-btn" onclick="thumbUpInit()">thumb_up</i>
          <i className="material-icons md-24" id="thumbdown-btn" onclick="thumbDownInit()">thumb_down</i>
          <i className="material-icons md-24" id="more-btn" onclick="moreInit()">more_vert</i>
        </td>
      </tr>
    ));
  }

  render(){
    return(
      <div className="main-container">
        <img src="http://res.cloudinary.com/djv7nouxz/image/upload/v1500287109/logo-header_dychne.jpg" alt="The Sound Mind" className="logo-header" />

        <h1 className="result-title">Other users recommend these songs for you:</h1>

        <div className="content-container-left">
          <table className="result-list">
              {this.showSongs()}
          </table>
          <h2 className="result-expand" onClick={this.nextFive}>Load 5 More</h2>
          <a href="ask.html" className="result-reset">Ask again</a>
          <div className="result-feedback">
            Was this recommendation useful?<br></br>
            <i className="material-icons md-24" id="satisfied-btn" onclick="satisfiedInit()">sentiment_very_satisfied</i>
            <i className="material-icons md-24" id="dissatisfied-btn" onclick="dissatisfiedInit()">sentiment_very_dissatisfied</i>
          </div>
        </div>

        <div className="footer-container player">
          <input type="range" className="player-time" />
          <div className="player-container">
            <div className="player-song">
              <h3 className="player-song-name">Oh My My</h3>
              <h4 className="player-song-artist">Fall Out Boy</h4>
            </div>
            <div className="player-option">
              <i className="material-icons md-24-light">skip_previous</i>
              <span className="play-pause" onclick="play()">
                <i className="material-icons init md-36-light">play_circle_outline</i>
                <i className="material-icons hover md-36-light">play_circle_filled</i>
              </span>
              <i className="material-icons md-24-light">skip_next</i>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Result;
