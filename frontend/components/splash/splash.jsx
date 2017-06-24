import React from 'react';

class Splash extends React.Component{
  constructor(props){
    super(props);

    this.state = { email: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.login(this.state.email);
  }

  handleChange(event){
    this.setState({ email: event.target.value })
  }

  render(){
    let divStyle = {
      backgroundImage: `url(http://res.cloudinary.com/djv7nouxz/image/upload/v1498198211/jukebox_df5swz.jpg)`,
      backgroundSize: `cover`,
      backgroundPosition: `50%`,
    };

    return (
      <div className="container">
        <div style={ divStyle } className='login background'></div>
        <img src="http://res.cloudinary.com/djv7nouxz/image/upload/v1498198209/logo-transparent_motead.png"
             alt="Logo"
             id="logo"></img>
         <form className="intro" onSubmit={this.handleSubmit}>
            <h1>Music for your every moment.</h1>
            <h3>Try our alpha now!</h3>
            <input type="text" className="email" onChange={this.handleChange} />
            <input type="submit" className="loginBtn" value="Sign In"/>
        </form>
      </div>
    );
  }
}

export default Splash;
