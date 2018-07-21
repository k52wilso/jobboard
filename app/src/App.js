import React, { Component } from 'react';
import './App.css';
import Button from './components/common/Button';

class App extends Component {

  state = {
    icon:''
  }

  

  componentDidMount(){
    this.setState({
      icon:(<i class="fas fa-arrow-right"></i>)
    });
  }

  render() {

    const { icon } = this.state

    return (
      <div className="App">
        <span className="badge yellow-badge">{icon}</span>
        <span className="badge purple-badge">{icon}</span>
        <span className="badge blue-badge">{icon}</span>
      </div>
    );
  }
}

export default App;
