import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchControl extends Component {

  state = {
       
  }

  constructor(){
      super();

  }

  

  render() {
    
    const { placeholder, results, value } = this.props;
    
    return (
        <div className="search-control">
        <i className="fas fa-search"></i>
          <input type="text" placeholder={placeholder} onChange={this.props.onChange}/>
          <div className="results">
            {
                results.map((result) => {
                    if(value !== '' && result.name.toLowerCase().includes(value.toLowerCase())){
                        return (
                            <a href="#" key={result.name}>
                                <div className="result">
                                    <img className="small-image" src={result.photoURL} alt={result.name}/>
                                    <p>{result.name}</p>
                                </div>
                            </a>
                        )
                    }
                }) 
            }
          </div>
        </div>
    );
  }
}

export default SearchControl;

// SearchControl.propTypes = {
    
// }