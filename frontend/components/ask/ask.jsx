import React from 'react';

class Ask extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      mood: "",
      location: "",
      activity: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  refresh(){
    this.props.history.replace('/ask');
  }

// Clusterfuck incoming!
// TODO: pls for the love of god, do something about this monstrosity
  handleSubmit(event){
    event.preventDefault();
    let location = event.target.children[1];
    let activity = event.target.children[3];
    let mood = event.target.children[5];
    if(this.state.mood === "" || this.state.location === "" || this.state.activity === ""){
      if(location.value != this.state.location){
        location.className = 'search-option unfilled';
      } else {
        location.className = 'search-option';
      }

      if(activity.value != this.state.activity){
        activity.className = 'search-option unfilled';
      } else {
        activity.className = 'search-option';
      }

      if(mood.value != this.state.mood){
        mood.className = 'search-option unfilled';
      } else {
        mood.className = 'search-option';
      }
    } else {
      this.props.ask(this.state.mood,
                     this.state.location,
                     this.state.activity,
                     this.props.currentUser.id);

       this.props.history.replace('ask/result');
    }
  };

  handleChange(event){
    event.preventDefault();
    switch (event.target.name) {
      case 'location':
        this.setState({location: event.target.value})
        break;
      case 'activity':
        this.setState({activity: event.target.value})
        break;
      case 'mood':
        this.setState({mood: event.target.value})
      default:
        break;
    }
  }

  askBG(){
    document.body.id = "ask";
  }

  render(){
    return (
      <div className="main-container">
        <img src="http://res.cloudinary.com/djv7nouxz/image/upload/v1500287109/logo-header_dychne.jpg"
          alt="The Sound Mind"
          className="logo-header"
          onClick={this.refresh} />

        <div className="search-container">
          <form className="searchForm" onSubmit = { this.handleSubmit }>
            <h1>Where are you right now?</h1>
            <select name="location" onChange = { this.handleChange } className='search-option'>
              <option selected disabled>Click to choose location</option>
              <option value="Cafe">Cafe</option>
              <option value="Gym">Gym</option>
              <option value="Home">Home</option>
              <option value="School">School</option>
              <option value="Street">Street</option>
              <option value="Transport">Transport</option>
              <option value="Workplace">Workplace</option>
            </select>

            <h1>What activity are you doing?</h1>
            <select name="activity" onChange = { this.handleChange } className='search-option'>
              <option selected disabled>Click to choose activity</option>
              <option value="Browse & Chill">Browse & Chill</option>
              <option value="Chores">Chores</option>
              <option value="Creative & Fun">Creative & Fun</option>
              <option value="Exercise">Exercise</option>
              <option value="Productivity">Productivity</option>
              <option value="Shower">Shower</option>
              <option value="Travel & Drive">Travel & Drive</option>
            </select>

            <h1>How are you feeling?</h1>
            <select name="mood" onChange = { this.handleChange } className='search-option'>
              <option selected disabled>Click to choose mood</option>
              <option value="Deep In Thought">Deep In Thought</option>
              <option value="Energetic">Energetic</option>
              <option value="Focused">Focused</option>
              <option value="Happy">Happy</option>
              <option value="Relaxed">Relaxed</option>
              <option value="Sad">Sad</option>
              <option value="Stressed">Stressed</option>
            </select>

            <input type="submit" className="search-btn" value="Ask" />
          </form>
        </div>
        {this.askBG()}
      </div>
    )
  }
}

export default Ask;
