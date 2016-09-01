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
              <img src="img/logo_photography.png" className="custom-logo"></img>
            </a>
          </div>

          <hr></hr>
        </header>

        {this.props.children}

        <footer>
          <nav>
            <ul>
              <a href="" className="fa fa-instagram" aria-hidden="true"></a>
              <a href="" className="fa fa-snapchat" aria-hidden="true"></a>
              <a href="" className="fa fa-facebook" aria-hidden="true"></a>
              <a href="" className="fa fa-twitter" aria-hidden="true"></a>
            </ul>
          </nav>
        </footer>
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
