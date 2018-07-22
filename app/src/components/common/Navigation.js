import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Navigation extends Component {

  state = {
    links:[],
    selectedLink:0   
  }

  constructor(){
      super();

      this._activateLink = this._activateLink.bind(this);
  }

  componentDidMount(){
      this.setState({
          links:[
            {id:1,name:"People"},
            {id:2,name:"Posts"},
            {id:3,name:"Location"},
            {id:4,name:"Groups"},
            {id:5,name:"Inbox"},
            {id:6,name:"Jobs"},
          ]
      });
  }

  _activateLink(id,e){
    this.setState({
        selectedLink:id
    })
  }
   

  render() {
        const { links, selectedLink } = this.state;
    return (
        <ul className="navigation-links">
            {
                links.map((link) => 
                    <li className={selectedLink === link.id ? 'active' : ''} key={link.id} onClick={this._activateLink.bind(this,link.id)}><a><i className="fas fa-arrow-right"></i>{link.name}</a></li>
                )
            }
        </ul>
    );
  }
}

export default Navigation;

// Navigation.propTypes = {
  
// }