import React from 'react';
import { Link } from "react-router";
import $ from 'jquery';

class Main extends React.Component{

  render(){
    return(
        <div id="mainpage">
          <div className="photo-container">
            <div className="row">
              <a href=""><img src="img/test_image.jpg" className="photo photo1"></img></a>
              <a href=""><img src="img/test_image.jpg" className="photo photo2"></img></a>
              <a href=""><img src="img/test_image.jpg" className="photo photo3"></img></a>
            </div>
            <div className="row">
              <a href=""><img src="img/test_image.jpg" className="photo photo1"></img></a>
              <a href=""><img src="img/test_image.jpg" className="photo photo2"></img></a>
              <a href=""><img src="img/test_image.jpg" className="photo photo3"></img></a>
            </div>
            <div className="row">
              <a href=""><img src="img/test_image.jpg" className="photo photo1"></img></a>
              <a href=""><img src="img/test_image.jpg" className="photo photo2"></img></a>
              <a href=""><img src="img/test_image.jpg" className="photo photo3"></img></a>
            </div>
          </div>
        </div>
    )
  }
}

export default Main;
