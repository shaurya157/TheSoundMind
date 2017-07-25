import React from 'react';
import ReactPlayer from 'react-player';

class Result extends React.Component{
  constructor(props){
    super(props);
    this.loadNumSongs = this.loadNumSongs.bind(this);
    this.showSongs = this.showSongs.bind(this);
    this.state = { songsShowing: [],
                   playing: false,
                   currentSong: {name: "", artist: "", url: ""},
                   shuffle: false,
                   played: 0,
                   firstClick: false};
    // First Click is a bit hacky. This adds to the song queue the first time someone plays a song, if this isn't there
    // The songqueue is only added on two clicks of next song, and song doesn't play automatically.
    // TODO: Find a fix.

    this.counter = 0;
    this.firstRender = false;
    this.togglePlay = this.togglePlay.bind(this);
    this.updatePlaybar = this.updatePlaybar.bind(this);
    this.startPreviousSong = this.startPreviousSong.bind(this);
    this.startNextSong = this.startNextSong.bind(this);
    this.goBack = this.goBack.bind(this);
    this.handleSlider = this.handleSlider.bind(this);
    this.likeOrUndoLike = this.likeOrUndoLike.bind(this);
    this.dislikeOrUndoDislike = this.dislikeOrUndoDislike.bind(this);
    this.likeOrDislikeChecker = this.likeOrDislikeChecker.bind(this);
    this.handleRecoFeedback = this.handleRecoFeedback.bind(this);
    this.showDetails = this.showDetails.bind(this);
  }

  // First X songs to be loaded
  componentWillReceiveProps(nextProps){
    if(!this.firstRender){
      this.firstRender = true;
      this.loadNumSongs(nextProps, 10);
    }
  }

  loadNumSongs(props, endIdx){
  // Checking to see if this is the correct props. React is passing in something as well
    if(!props.currentUser){
      props = this.props;
    }

    let firstLength = props.firstRecommendation.length;
    let secondLength = props.secondRecommendation.length;
    let thirdLength = props.thirdRecommendation.length;
    let songsToAdd = [];
    endIdx = typeof(endIdx) === 'number' ? endIdx : 5;

    for(let i = endIdx; i > 0; i-- ){
      if(this.counter < firstLength){
        songsToAdd.push(props.firstRecommendation[this.counter]);
      } else if (this.counter < secondLength) {
        songsToAdd.push(props.secondRecommendation[this.counter - firstLength]);
      } else {
        songsToAdd.push(props.thirdRecommendation[this.counter - (firstLength + secondLength)]);
      }

      this.counter += 1;
    }

    this.setState({songsShowing: this.state.songsShowing.concat(songsToAdd)});
  }

  showDetails(event){
    event.preventDefault();

    // LMAO so jank! TODO: pls be less jank
    let el = event.target.parentElement.parentElement.parentElement.children[1]
    if(el.className === 'result-detail'){
      el.className = 'result-detail hidden';
    } else {
      el.className = 'result-detail';
    }
  }

  showSongs(){
    return this.state.songsShowing.map((song, idx) => (
      <div className={this.state.currentSong.name === song.name ? "result-list sub current-song" : "result-list sub"}  key={idx}>
        <div className="result-song" onClick={this.playSong(song)}>
          <span className="result-name">{song.name}</span>
          <span className="result-option">
            <i className="material-icons md-24" id="more-btn" onClick={this.showDetails}>more_vert</i>
          </span>
        </div>

        <div className="result-detail hidden">
          <div className="result-detail sub">
            <span className="result-artist">Performed by {song.artist}</span>
            <span className="result-option">
              <i className="material-icons md-24"
                  id={this.likeOrDislikeChecker(song, 'like') ? "thumbup-btn-1" : 'thumbup-btn'}
                  onClick={this.likeOrUndoLike(song)}>thumb_up</i>
              <i className="material-icons md-24"
                  id={this.likeOrDislikeChecker(song, 'dislike') ? "thumbdown-btn-1" : 'thumbdown-btn'}
                  onClick={this.dislikeOrUndoDislike(song)}>thumb_down</i>
            </span>
          </div>
        </div>
      </div>
    ));
  }

  playSong(song){
    return (event) => {
      event.preventDefault();
      this.props.songPlayed(this.props.recommendation.id);
      this.setState({currentSong: song,
                     playing: true})
    }
  }

  togglePlay(event){

    let arr = event.currentTarget.children;
    if(this.state.playing){
      arr[0].innerHTML = 'play_circle_outline';
      arr[1].innerHTML = 'play_circle_filled';
      this.setState({playing: false})
    } else {
      arr[0].innerHTML = 'pause_circle_outline';
      arr[1].innerHTML = 'pause_circle_filled';
      this.setState({playing: true});
    }
  }

  startNextSong(){
    let index = this.state.songsShowing.indexOf(this.state.currentSong);

    this.setState((oldState) => ({
      currentSong: oldState.songsShowing[index + 1],
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
    let index = this.state.songsShowing.indexOf(this.state.currentSong);

    this.setState((oldState) => ({
      currentSong: oldState.songsShowing[index - 1],
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
    let that = this;
    return (event) => {
      event.preventDefault();

      if(that.likeOrDislikeChecker(song, 'like')){
        event.target.id = 'thumbup-btn';
        that.props.undoLike(that.props.currentUser.id, song.id);
      } else {
        let disliked = that.likeOrDislikeChecker(song, 'dislike');

// this sucks. TODO: change to have like and dislike done together instead of 2 api calls
        event.target.id = 'thumbup-btn-1';
        if(disliked){
          event.target.nextSibling.id = 'thumbdown-btn';
          that.props.undoDislike(this.props.currentUser.id, song.id);
        }

        that.props.like(that.props.currentUser.id, song.id);
      }
    }
  }

  dislikeOrUndoDislike(song){
    let that = this;
    return (event) => {
      if(that.likeOrDislikeChecker(song, 'dislike')){
        event.target.id = 'thumbdown-btn';
        that.props.undoDislike(that.props.currentUser.id, song.id);
      } else {
        let liked = that.likeOrDislikeChecker(song, 'like');

// this sucks. TODO: change to have like and dislike done together instead of 2 api calls
        event.target.id = 'thumbdown-btn-1';
        if(liked){
          event.target.previousSibling.id = 'thumbdown-btn';
          that.props.undoLike(this.props.currentUser.id, song.id);
        }

        that.props.dislike(that.props.currentUser.id, song.id);
      }
    }
  }

// Returns true if song is liked or disliked, false otherwise
  likeOrDislikeChecker(song, like){
    let status = false;

    if(like === 'like'){
      this.props.likedSongs.forEach((micCheck) => {
          if(song.name === micCheck.name){
            status = true;
            return;
          }
      });
    } else {
      this.props.dislikedSongs.forEach((micCheck) => {
          if(song.name === micCheck.name){
            status = true;
            return;
          }
      });
    }

    return status;
  }

  handleRecoFeedback(event){
    let id = this.props.recommendation.id;

    event.target.id == 'satisfied-btn' ? this.props.recoFeedback(id, true) : this.props.recoFeedback(id, false)
  }

  resultBG(){
    document.body.id = "result";
  }

  render(){
    return(
      <div className="main-container">
        <div className="main-container result">
          <img src="http://res.cloudinary.com/djv7nouxz/image/upload/v1500287109/logo-header_dychne.jpg"
             alt="The Sound Mind"
             className="logo-header"
             onClick={this.goBack}/>
          <h1 className="result-title">Other users recommend these songs for you:</h1>
            <div className="result-container">
              <div className="result-list">
                {this.showSongs()}
              </div>
              <h2 className="result-expand" onClick={this.loadNumSongs}>
                {this.props.thirdRecommendation.length == 0 ? "" : "Load 5 more"}
              </h2>
              <div className="result-end">
                <a onClick={this.goBack} className="result-reset">Ask again</a>
                <div className="result-feedback">
                  Was this recommendation useful?<br></br>
                <i className="material-icons md-24"
                  id={this.props.recommendation.feedback === true ? 'satisfied-btn-1' : 'satisfied-btn'}
                  onClick={this.handleRecoFeedback}>sentiment_very_satisfied</i>
                <i className="material-icons md-24"
                  id={this.props.recommendation.feedback === false ? 'dissatisfied-btn-1' : 'dissatisfied-btn'}
                  onClick={this.handleRecoFeedback}>sentiment_very_dissatisfied</i>
              </div>
            </div>
          </div>
        </div>

        <div className={this.state.currentSong.name === "" ? "footer-container stream hidden" : "footer-container stream"}>
        <ReactPlayer
          ref={player => {this.player = player}}
          url={this.state.currentSong.url}
          playing={this.state.playing}
          hidden={true}
          onEnded={this.startNextSong}
          onProgress={this.updatePlaybar}
          className='hidden'/>

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
            <i className="material-icons md-24-light"
               onClick={this.startPreviousSong}>skip_previous</i>
            <span className="play-pause" onClick={this.togglePlay}>
              <i className="material-icons init md-36-light">pause_circle_outline</i>
              <i className="material-icons hover md-36-light">pause_circle_filled</i>
            </span>
            <i className="material-icons md-24-light" onClick={this.startNextSong}>skip_next</i>
          </div>
        </div>
      </div>
      {this.resultBG()}
    </div>
    )
  }
}


export default Result;
