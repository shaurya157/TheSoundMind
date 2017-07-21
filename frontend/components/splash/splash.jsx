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

  runBackgroundCarousel(interval, frames){
      document.body.id = "index-bg0";
      let int = 0;

      function func() {
          let x = document.getElementById("index-bg" + int);
          if(int === frames) { int = 1; } else { int++; }
          x.id = "index-bg" + int;
      }

      let swap = window.setInterval(func, interval);
  }

  render(){
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
               <p className="cta">Register your email now to start your experience today!</p>

                 <form className="form-w-btn" onSubmit={this.handleSubmit}>
                    <input type="text" className="email-input" onChange={this.handleChange} />
                    <input type="submit" className="login-btn" value="Sign In"/>
                </form>
           </div>
      {this.runBackgroundCarousel(5000, 7)}
    </div>
    );
  }
}

export default Splash;
