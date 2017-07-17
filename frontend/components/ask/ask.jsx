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
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.ask(this.state.mood,
                   this.state.location,
                   this.state.activity,
                   this.props.currentUser.id);

    this.props.history.push('ask/result')
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
        this.setState({mood: event.target.values})
      default:
        break;
    }
  }

  render(){
    return (
      <div id="search">
        <h2>What are you doing right now?</h2>

        <form className="searchForm" onSubmit = { this.handleSubmit }>
          <select name="location" onChange = { this.handleChange }>
            <option selected disabled>Click to choose location</option>
            <option value="Library">Library</option>
            <option value="Home">Home</option>
            <option value="Train">Train</option>
            <option value="Gym">Gym</option>
            <option value="Cafe">Cafe</option>
          </select>

          <select name="activity" onChange = { this.handleChange }>
            <option selected disabled>Click to choose activity</option>
            <option value="Studying">Studying</option>
            <option value="Relaxing">Relaxing</option>
            <option value="Traveling">Traveling</option>
            <option value="Running">Running</option>
            <option value="Reading">Reading</option>
          </select>

          <select name="mood" onChange = { this.handleChange }>
            <option selected disabled>Click to choose mood</option>
            <option value="Happy">Happy</option>
            <option value="Frustrated">Frustrated</option>
            <option value="Angry">Angry</option>
            <option value="Contemplative">Contemplative</option>
            <option value="Chill">Chill</option>
          </select>

          <input type="submit" className="searchBtn" value="Ask" />
        </form>
      </div>
    )
  }
}

export default Ask;
