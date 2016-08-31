import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { hashHistory } from 'react-router';

import Homepage from "./homepage";
import Mainpage from "./mainpage";
import Aboutpage from "./aboutpage";

class App extends React.Component {

  render(){
    return(
      <div>
        <header>
          <div className="logo-container">
            <a href="">
              <img src="img/logo2.png" className="custom-logo"></img>
            </a>
          </div>

          <nav>
            <ul>
              <a href=''>home</a>
              <a href=''>about</a>
              <a href=''>contact</a>
            </ul>
          </nav>
        </header>

        {this.props.children}
      </div>
    )
  }
};

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Mainpage} />
    <Route path="aboutpage" component={Aboutpage} />
    </Route>
  </Router>
), document.getElementById('app'));

export default App;
