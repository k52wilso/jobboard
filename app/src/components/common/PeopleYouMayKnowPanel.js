import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PeopleYouMayKnowPanel extends Component {

  state = {
       
  }

  constructor(){
      super();

  }

  

  render() {
    
    const { connections } = this.props;
    
    return (
        <div className="panel m-40-y">
          <h3 className="people-you-know-title">PEOPLE YOU MAY KNOW</h3>
          <hr/>
          <div className="people-you-may-know-list">
            {
                connections.map((connection) => {
                    return (
                        <div className="people" key={connection.name}>
                            <img className="small-image" src={connection.photoURL} alt={connection.name}/>
                            <div className="information">
                                <a className="name" href="#">{connection.name}</a>
                                <p className="role">{connection.jobRole}</p>
                            </div>
                            <div className="mutual-connections">
                                {connection.numberOfMutualConnections}<i className="far fa-user"></i>
                            </div>
                        </div>
                    )
                })
            }
          </div>
        </div>
    );
  }
}

export default PeopleYouMayKnowPanel;

// PeopleYouMayKnowPanel.propTypes = {
    
// }