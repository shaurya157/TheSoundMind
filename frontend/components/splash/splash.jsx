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
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if(!regex.test(this.state.email)) {
      event.target.children[0].className = "email-input unfilled";
    } else {
      event.target.children[0].className = "email-input";
      this.props.login(this.state.email);
    }
  }

  componentWillMount(){
    if(this.props.currentUser.id){
      this.props.history.replace('/ask');
    }
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
          var carouselBG = document.getElementById("index-bg" + int);
          if(carouselBG){
            if(int === frames) { int = 1; } else { int++; }
            carouselBG.id = "index-bg" + int;
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
      <div className="main-container">
        <img src="http://res.cloudinary.com/djv7nouxz/image/upload/v1500317162/logo_juo2mb.png"
          alt="Logo"
          className="logo" />

        <div className="vp-container">
          <span className="vp-main">Music for your every moment</span>
          <span className="vp-sub">Powered by you. For you.</span>
        </div>

        <div className="signup-container">
          <p className="cta">Type your email below to get your first playlist recommendation now!</p>

          <form className="form-w-btn" onSubmit={this.handleSubmit}>
            <input type="text" className="email-input" onChange={this.handleChange} />
            <input type="submit" className="login-btn" value="Try now!"/>
          </form>

        </div>
        {this.runBackgroundCarousel(5000, 7)}
      </div>
    );
  }
}

export default Splash;
