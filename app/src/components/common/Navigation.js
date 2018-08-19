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
         selectedLink:this.props.selectedLink
     })
 }

  _activateLink(id,e){
    console.log(id);
    this.setState({
        selectedLink:id
    })
  }
   

  render() {
    const { links } = this.props;
    const { selectedLink } = this.state;
    return (
        <ul className="navigation-links">
            {
                links.map((link) => 
                    <li className={selectedLink === link.id ? 'active' : ''} key={link.id} onClick={this._activateLink.bind(this,link.id)}><a>{link.icon ? link.icon : null}{link.name}</a></li>
                )
            }
        </ul>
    );
  }
}

export default Navigation;

// Navigation.propTypes = {
  
// }