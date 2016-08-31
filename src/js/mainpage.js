import React from 'react';
import { Link } from "react-router";
import $ from 'jquery';

class Mainpage extends React.Component{

  render(){
    return(
        <div id="mainpage">
          <div className="photo-container">
            <div className="row">
              <div classname="photo1"></div>
              <div classname="photo2"></div>
              <div classname="photo3"></div>
            </div>
          </div>
        </div>
    )
  }
}

export default Mainpage;
