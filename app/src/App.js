import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
import Modal from './components/Modal';

class App extends Component {

  state = {
    dropdown:[],
    possibleConnections:[],
    placeHolderText:'',
    results:[],
    searchValue:'',
    showModal:false,
    modalType:'',
    content:null
  }

  constructor(){
    super()

    this.changeSelection = this.changeSelection.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  componentDidMount(){
    
  }


  changeSelection(item){
    this.setState({
        currentSelection:item
    });
  }

  onSearchChange(e){
    const value = e.target.value;
    this.setState({
      searchValue:value
    })
  }

  showModal(TYPE,content){
    this.setState({
      showModal:!this.state.showModal,
      modalType:TYPE ? TYPE : '',
      content:content ? content : null
    })
  }

  render() {

    const { showModal , modalType, content} = this.state;
    
    return (
      <div className="App">
        <Modal modalShow={showModal} modalType={modalType} content={content} show={this.showModal}/>
        <Main showModal={this.showModal} />
      </div>
    );
  }
}

export default App;
