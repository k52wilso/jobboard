import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Dropdown extends Component {

  state = {
     isOpen:false
  }

  constructor(props){
      super(props);
      this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown(){
      this.setState({
          isOpen:!this.state.isOpen
      })
  }
  
  changeDropdown(item){
      this.setState({
          isOpen:!this.state.isOpen
      });
      this.props.changeDropdown(item);
  }
  

  render() {

    const { data,currentSelection} = this.props;
    const { isOpen } = this.state;
        return (
            <div className="dropdown">
                <div className="selection" onClick={this.toggleDropdown}>
                    {currentSelection ? currentSelection.display : null}
                    {isOpen ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}
                </div>
                {isOpen && <div className="list">
                    {data.map((item) => {
                        if(currentSelection.display != item.display){
                            return (
                                <div className="item" key={item.value} onClick={this.changeDropdown.bind(this,item)} >{item.display}</div>
                            )
                        }
                    })}
                </div>}
            </div>
        );
  }
}

export default Dropdown;

