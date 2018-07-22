import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserPanel extends Component {

  state = {
       
  }

  constructor(){
      super();

  }

  

  render() {
    
    
    return (
        <div className="panel col-4">
          <p className="timestamp">1d</p>
          <div className="userProfile">
            <img className="large-image" src="./assets/images/me.jpg"/>
          </div>
          <div className="user-name-role">
            <a href="#">Kyle Wilson-McCormack</a>
            <span>-</span>
            <p>Software Developer</p>
          </div>
          <div className="post-area col-12">
            <p className="post">I am so excited to be working at IBM.</p>
          </div>
          <div className="comments">
            <div className="comment">
              <img className="small-image" src="./assets/images/girl.jpg" />
              <p><a href="#">Melinda Tomas</a><span>So happy for you Kyle!</span></p>
              <p className="timestamp">1d</p>
            </div>
            <div className="comment">
              <img className="small-image" src="./assets/images/guy.jpg" />
              <p><a href="#">Daryl Jenkins</a> <span>Congrats my friend! I have known you for so many years and I know how many ups and down you have had. Congrats Again!</span></p>
              <p className="timestamp">1d</p>
            </div>
          </div>
          <button class="reply-button" type="button">REPLY <i class="fas fa-arrow-circle-right"></i></button>
        </div>
    );
  }
}

export default UserPanel;

// UserPanel.propTypes = {
    
// }