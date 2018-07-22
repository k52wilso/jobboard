import React, { Component } from 'react';
import './App.css';
import Dropdown from './components/common/Dropdown';
import SearchControl from './components/common/SearchControl';

class App extends Component {

  state = {
    dropdown:[],
    possibleConnections:[],
    placeHolderText:'',
    results:[],
    searchValue:''
  }

  constructor(){
    super()

    this.changeSelection = this.changeSelection.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  componentDidMount(){
    // this.setState({
    //   currentSelection:{display:'Popular',value:'popular'},
    //   dropdown:[
    //     {display:'Popular',value:'popular'},
    //     {display:'Newest',value:'new'},              
    //   ]
    // });
    // this.setState({
    //   possibleConnections:[{
    //     name:'Sara Jenkins',
    //     jobRole:'UX Designer',
    //     photoURL:'./assets/images/girl.jpg',
    //     numberOfMutualConnections:11
    //   },{
    //     name:'Daryl Johnson',
    //     jobRole:'Full Stack Developer',
    //     photoURL:'./assets/images/guy.jpg',
    //     numberOfMutualConnections:10
    //   }]
    // });

    this.setState({
      results:[{
        type:'person',
        name:'Sara Jenkins',
        photoURL:'./assets/images/girl.jpg',
      },{
        type:'person',
        name:'Daryl Johnson',
        photoURL:'./assets/images/guy.jpg',
      },{
        type:'company',
        name:'Johnson & Johnson',
        photoURL:'./assets/images/johnson.jpg'
      }]
    });
    
    this.setState({
      placeHolderText:'Search for people, jobs, companies and more...'
    })
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

  render() {

    const { results, placeHolderText, searchValue } = this.state;
    
    return (
      <div className="App">
        <div className="col-4">
          <SearchControl value={searchValue} results={results} placeholder={placeHolderText} onChange={this.onSearchChange}/>
        </div>
      </div>
    );
  }
}

export default App;
