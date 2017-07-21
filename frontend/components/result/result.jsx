import React from 'react';
import ReactPlayer from 'react-player';

class Result extends React.Component{
  constructor(props){
    super(props);
    this.nextFive = this.nextFive.bind(this);
    this.showSongs = this.showSongs.bind(this);
    this.state = { songsShowing: [],
                   playing: false,
                   currentSong: {name: "", artist: "", url: ""},
                   playedSongs: [],
                   songsToPlay: [],
                   shuffle: false,
                   played: 0,
                   firstClick: false};
    // First Click is a bit hacky. This adds to the song queue the first time someone plays a song, if this isn't there
    // The songqueue is only added on two clicks of next song, and song doesn't play automatically.
    // TODO: Find a fix.

    this.counter = 0;
    this.togglePlay = this.togglePlay.bind(this);
    this.updatePlaybar = this.updatePlaybar.bind(this);
    this.startPreviousSong = this.startPreviousSong.bind(this);
    this.startNextSong = this.startNextSong.bind(this);
    this.goBack = this.goBack.bind(this);
    this.handleSlider = this.handleSlider.bind(this);
  }

  nextFive(){
    let firstLength = this.props.firstRecommendation.length
    let secondLength = this.props.secondRecommendation.length
    let thirdLength = this.props.thirdRecommendation.length

    let songsToAdd = []
    for(let i = 5; i > 0; i-- ){
      if(this.counter < firstLength){
        songsToAdd.push(this.props.firstRecommendation[this.counter]);
      } else if (this.counter < secondLength) {
        songsToAdd.push(this.props.secondRecommendation[this.counter - firstLength]);
      } else {
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
          <span className="play-pause" onClick={this.playSong(song)}>
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

  playSong(song){
    return (event) => {
      event.preventDefault();
        this.setState({currentSong: song,
                       playing: true})
    }
  }

  togglePlay(event){
    event.target.innerHTML = 'pause_circle_outline';
    this.state.playing ? this.setState({playing: false}) : this.setState({playing: true});
  }

  startNextSong(){
    let arr = [];
    let index = this.state.songsShowing.indexOf(this.state.currentSong)

    if(this.state.songsToPlay.length === 0){
      arr = this.state.songsShowing.slice(0)
    } else {
      arr = this.state.songsToPlay.slice(index + 1)
    }

    this.setState((oldState) => ({
      playedSongs: oldState.playedSongs.concat([oldState.currentSong]),
      currentSong: arr[0],
      songsToPlay: arr.slice(1),
      played: 0
    }));
  }

  shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
  }

  startPreviousSong(){
    this.setState((oldState) => ({
      playedSongs: oldState.playedSongs.slice(0, oldState.playedSongs.length - 1),
      currentSong: oldState.playedSongs[oldState.playedSongs.length - 1],
      songsToPlay: oldState.songsToPlay.concat([oldState.currentSong]),
      played: 0
    }));
  }

  shufflePlay(){
    this.state.shuffle ? this.setState({shuffle: false}) : this.setState({shuffle: true});
  }

  goBack(){
    this.props.history.replace('/ask');
  }

  handleSlider(event){
    let played = event.target.value / 100
    this.player.seekTo(played);
    this.setState({played: played})
  }

  updatePlaybar({played}) {
    this.setState({played: played * 100})
  }

  likeOrUndoLike(song){
    return (event) => {
      event.preventDefault();
      if(this.props.currentUser.likedSongs[song]){
        "";
      }
    }
  }

  dislikeOrUndoDislike(song) {
    return (event) => {
      event.preventDefault();
    }
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
          <h2 className="result-expand" onClick={this.nextFive}>
            {this.props.thirdRecommendation.length == 0 ? "" : "Load 5 more"}
          </h2>
          <a onClick={this.goBack} className="result-reset">Ask again</a>
          <div className="result-feedback">
            Was this recommendation useful?<br></br>
            <i className="material-icons md-24" id="satisfied-btn" onclick="satisfiedInit()">sentiment_very_satisfied</i>
            <i className="material-icons md-24" id="dissatisfied-btn" onclick="dissatisfiedInit()">sentiment_very_dissatisfied</i>
          </div>
        </div>

        <div className="footer-container player">
          <ReactPlayer
            ref={player => {this.player = player}}
            url={this.state.currentSong.url}
            playing={this.state.playing}
            hidden={true}
            onEnded={this.startNextSong}
            onProgress={this.updatePlaybar} />

        <input type="range"
               className="player-time"
               onChange = {this.handleSlider}
               value = {this.state.played}/>
          <div className="player-container">
            <div className="player-song">
              <h3 className="player-song-name">{this.state.currentSong.name}</h3>
              <h4 className="player-song-artist">{this.state.currentSong.artist}</h4>
            </div>

            <div className="player-option">
              <i className="material-icons md-24-light" onClick={this.startPreviousSong}>skip_previous</i>
              <span className="play-pause" onClick={this.togglePlay}>
                <i className="material-icons init md-36-light">play_circle_outline</i>
                <i className="material-icons hover md-36-light">play_circle_filled</i>
              </span>
              <i className="material-icons md-24-light" onClick={this.startNextSong}>skip_next</i>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Result;
