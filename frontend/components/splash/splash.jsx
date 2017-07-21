import React from 'react';

class Splash extends React.Component{
  constructor(props){
    super(props);

    this.state = { email: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.runBackgroundCarousel = this.runBackgroundCarousel.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.login(this.state.email);
  }

  handleChange(event){
    this.setState({ email: event.target.value })
  }

  componentWillReceiveProps(newProps){
    if(Object.keys(newProps.currentUser).length !== 0){
      this.props.history.push('ask')
    }
  }

  runBackgroundCarousel(interval, frames) {
      let int = 0;
      function func() {
          var x = document.getElementById("index-bg" + int);
          if(x){
            if(int === frames) { int = 1; } else { int++; }
            x.id = "index-bg" + int;
          } else {
            return;
          }
      }

      setInterval(func, interval);
  }

  render(){
    // let divStyle = {
    //   backgroundImage: `url(http://res.cloudinary.com/djv7nouxz/image/upload/v1498198211/jukebox_df5swz.jpg)`,
    //   backgroundSize: `cover`,
    //   backgroundPosition: `50%`,
    // };
    // <div style={ divStyle } className='login background'></div>

    return (
      <div id="index-bg0">
        <div className="main-container">
          {this.runBackgroundCarousel(5000, 7)}
          <img src="http://res.cloudinary.com/djv7nouxz/image/upload/v1500317162/logo_juo2mb.png"
               alt="Logo"
               className="logo"></img>
             <div className="content-container-center-center">
               <span className="vp-main">Music for your every moment</span>
               <span className="vp-sub">Powered by you. For you.</span>
               <div className="signup-container">
                 <p className="cta">Register your email now to start your experience today!</p>
                   <form className="form-w-btn" onSubmit={this.handleSubmit}>
                      <h1>Music for your every moment.</h1>
                      <h3>Try our alpha now!</h3>
                      <input type="text" className="email-input" onChange={this.handleChange} />
                      <input type="submit" className="login-btn" value="Sign In"/>
                  </form>
               </div>
             </div>
        </div>
    </div>
    );
  }
}

export default Splash;
