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
        <Button className="post-button" name="POST" type="button" _onClick={() => alert('Hello World')} icon={icon} />
      </div>
    );
  }
}

export default App;
