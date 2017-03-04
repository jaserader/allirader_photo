import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { hashHistory } from 'react-router';

import Main from "./homepage";
import About from "./aboutpage";
import Contact from "./contactpage";

class App extends React.Component {

  render(){
    return(
      <div>
        <header>
          <div className="logo-container">
            <a className="main-logo" href="#">
              <img src="img/logo_photography.png" className="custom-logo"></img>
            </a>
            <nav className="header-nav">
              <a href="#">portfolio</a>
              <a href="#about">about</a>
              <a href="#contact">contact</a>
            </nav>
          </div>
        </header>

        {this.props.children}

        <footer>
          <div className="footer-container">
            <nav>
              <a href="" className="fa fa-instagram" aria-hidden="true"></a>
              <a href="" className="fa fa-snapchat" aria-hidden="true"></a>
              <a href="" className="fa fa-facebook" aria-hidden="true"></a>
              <a href="" className="fa fa-twitter" aria-hidden="true"></a>
            </nav>
          </div>
        </footer>
    </div>
    )
  }
};

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Main} />
    <Route path="about" component={About} />
    <Route path="contact" component={Contact} />
    </Route>
  </Router>
), document.getElementById('app'));

export default App;
