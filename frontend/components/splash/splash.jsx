import React from 'react';

class Splash extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div class="container">
        <img src="http://res.cloudinary.com/djv7nouxz/image/upload/v1498198209/logo-transparent_motead.png"
             alt="Logo"
             id="logo"></img>
        <form class="intro">
          <h1>Music for your every moment.</h1>
          <h3>Try our alpha now!</h3>
          <input type="text" name="email" />
          <input type="submit" class="loginBtn" value="Sign In" formaction="ask.html" />
        </form>
      </div>
    );
  }
}

export default Splash;
