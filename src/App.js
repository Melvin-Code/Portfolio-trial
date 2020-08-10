import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/partials/LandingpageCom/Navbar";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Contact from "./components/Contact";
import Work from "./components/Work";
class App extends Component {
  targetElement = null;
  state = {
    path: window.location.pathname
  };
  componentDidMount(){
    document.title = "Casting Desings"
    this.targetElement = document.querySelector('#aBk');
  }
 
   
  showTargetElement = () => {
    
    disableBodyScroll(this.targetElement);
  };
  hideTargetElement = () => {
    
    enableBodyScroll(this.targetElement);
  };
 

rendering=()=>{
  // this.showTargetElement()
   
     this.setState({
        path: window.location.pathname

    })


}
  
  render() {
    // console.log(this.state)
    return (
      <Router>
        <div id='aBk' className="App bg">
          <NavBar rendering= {this.rendering} path={this.state.path}/>
          <Switch>
          <Route exact path="/" render={props => <LandingPage rendering={this.rendering} {...props} />} />
          <Route exact path="/About" render={props => <About {...props} />} />
          <Route exact path="/Contact" render={props => <Contact {...props} />} />
          <Route exact path="/Work" render={props => <Work {...props} />} />
          </Switch>
        </div>
        </Router>
    );
  }
}

export default App;
