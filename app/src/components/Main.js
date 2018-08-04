import React, { Component } from 'react';
import SearchControl from './common/SearchControl';
import Navigation from './common/Navigation';
import Chart from 'chart.js';
import SharePanel from './common/SharePanel';
import ArticlePanel from './common/ArticlePanel';
import PeopleYouMayKnowPanel from './common/PeopleYouMayKnowPanel';
import Dropdown from './common/Dropdown';
import UserPanel from './common/UserPanel';
import { hasDuplicates } from '../utils/Utils';
class Main extends Component {

  state = {
    results:[],
    placeholder:'',
    searchValue:'',
    links:[],
    otherLinks:[],
    article:{},
    possibleConnections:[],
    dropdown:[],
    currentSelection:{},
    userPanel:{},
    loggedUser:{}
  }



  constructor(){
    super();
    this.onSearchChange = this.onSearchChange.bind(this);
    this.initializeChart = this.initializeChart.bind(this);
    this.changeSelection = this.changeSelection.bind(this);
    this.addCommentToUserPanel = this.addCommentToUserPanel.bind(this);
    this.getLoggedUser = this.getLoggedUser.bind(this);
    this.addOrRemoveLikeToPost = this.addOrRemoveLikeToPost.bind(this);
}

onSearchChange(e){
    const value = e.target.value;
    this.setState({
      searchValue:value
    })
}

changeSelection(item){
    this.setState({
        currentSelection:item
    });
  }

addCommentToUserPanel(comment){
    let { userPanel } = this.state;
    userPanel.comments = [comment,... userPanel.comments];
    this.setState({userPanel});
}

initializeChart(){
    var ctx = document.getElementById("myChart");
    
      
    

    const data = {
        labels:['Profile Completed (75%)'],
        datasets: [{
            data: [75,25],
            backgroundColor:[
                '#0097e6',
                '#ffffff'
            ],
            
        }]
    };

    var myDoughnutChart = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options:{
            responsive:true,
            tooltips:{
                enabled:false
            },
            legend: {
                display: true,
                labels: {
                    fontColor: '#0097e6'
                }
            }
        }
    });
}

componentDidMount(){
   
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
        }],
        placeholder:'Search for people, jobs, companies and more...',
        searchValue:'',
        links:[
            {id:1,name:"People",icon:(<i className="fas fa-user-tie"></i>)},
            {id:2,name:"Posts",icon:(<i className="fas fa-comment-alt"></i>)},
            {id:3,name:"Location",icon:(<i className="fas fa-map-marker-alt"></i>)},
            {id:4,name:"Groups",icon:(<i className="fas fa-users"></i>)},
            {id:5,name:"Inbox",icon:(<i className="fas fa-inbox"></i>)},
            {id:6,name:"Jobs",icon:(<i className="fas fa-suitcase"></i>)},
        ],
        otherLinks:[
            {id:1,name:"Go Premium"},
            {id:2,name:"Settings"},
            {id:3,name:"Help"},
        ],

        article:{
            photoURL:'./assets/images/devday.jpg',
            title:'Start at IBM',
            text:'This is my journey at IBM.',
            author:'Kyle Wilson-McCormack',
            date: 'July 31st 2018'
        },
        possibleConnections:[{
            name:'Sara Jenkins',
            jobRole:'UX Designer',
            photoURL:'./assets/images/girl.jpg',
            numberOfMutualConnections:11
            },{
            name:'Daryl Johnson',
            jobRole:'Full Stack Developer',
            photoURL:'./assets/images/guy.jpg',
            numberOfMutualConnections:10
            }],
            currentSelection:{display:'Popular',value:'popular'},
            dropdown:[
                {display:'Popular',value:'popular'},
                {display:'Newest',value:'new'},              
            ],
        allPosts:[
            {
                id:0,
                name:'Kyle Wilson-McCormack',
                photoURL:'./assets/images/me.jpg',
                jobRole:'Software Developer',
                text:'I am so excited to be working at IBM.',
                likes:[
                    {
                        id:1,
                        name:'Melinda Tomas',
                        photoURL:'./assets/images/girl.jpg',
                        likes:2
                    },
                    {
                        id:2,
                        name:'Daryl Jenkins',
                        photoURL:'./assets/images/guy.jpg',
                        likes:1
                    },{
                        id:3,
                        name:'Michael Jenkins',
                        photoURL:'./assets/images/guy.jpg',
                        likes:1
                    }
                ],
                date:'1d',
                comments:[{
                    id:1,
                    name:'Melinda Tomas',
                    comment:'So happy for you Kyle!',
                    date:'1d',
                    photoURL:'./assets/images/girl.jpg',
                    likes:2
                },{
                    id:2,
                    name:'Daryl Jenkins',
                    comment:'Congrats my friend! I have known you for so many years and I know how many ups and down you have had. Congrats Again!',
                    date:'1d',
                    photoURL:'./assets/images/guy.jpg',
                    likes:1
                },{
                    id:3,
                    name:'Michael Jenkins',
                    comment:'Congrats my Kyle',
                    date:'1d',
                    photoURL:'./assets/images/guy.jpg',
                    likes:1
                }]
            }
        ],
        loggedUser:{
            name:'Jorge',
            id:4,
            photoURL:'./assets/images/guy.jpg'
        }
    });

    this.initializeChart();
}

getLoggedUser(){
    return this.state.loggedUser;
}

addOrRemoveLikeToPost(userPanel,userLikingPost){
    const { allPosts } = this.state;
    allPosts.map((post) => {
        if(post.id === userPanel.id){
            let retVal = hasDuplicates(post.likes,userLikingPost.id,'id');
            if(retVal >= 0){ // remove like
                return {
                    ...post,
                    likes: post.likes.splice(retVal,1)
                }
            }else{ // add like
                post.likes.push(userLikingPost.id);
                return {
                    ...post,
                    likes:[...post.likes]
                };
            }
            
        }
    });
    this.setState({allPosts});
}

  render() {
    
    const { placeholder, searchValue, results, links, otherLinks, article , possibleConnections , currentSelection, dropdown ,allPosts} = this.state;
    
    return (
        <div className="main">
            <div className="header">
                <div className="logo-div col-2">
                    <img src="./assets/images/ibm.png" alt="logo"/>
                </div>
                <div className="col-8">
                    <SearchControl placeholder={placeholder} value={searchValue} results={results} onChange={this.onSearchChange} />
                </div>
                <div className="col-2 notifications">
                    <img className="small-image" src="./assets/images/me.jpg" alt="user-image" />
                    <span className="notification">3</span>
                </div>
            </div>
            <div className="side-bar col-2">
                <Navigation links={links} selectedLink={2}/>
                <div className="divider"></div>
                <ul className="other-links">
                    {
                        otherLinks.map((link)=>{
                            return (
                                <li key={link.id}>
                                    <a>{link.name}</a>
                                </li>
                            );
                        })
                    }
                </ul>
                <div className="divider"></div>
                <div className="chart-area">
                    <canvas id="myChart"></canvas>
                </div>
                <div className="chart-text">
                    <p>Answer more questions and fill out more sections to complete your profile.</p>
                    <a href="#">Complete Profile</a>
                </div>
            </div>
            <div className="main-area col-10 fadein">
                <div className="col-7 p-40-x">
                    <SharePanel />
                    <div className="col-12 m-20-y">
                        <div className="float-right">
                            <p className="dropdown-title">Sort By</p>
                            <Dropdown data={dropdown} currentSelection={currentSelection} changeDropdown={this.changeSelection}/>
                        </div>
                    </div>
                    {allPosts && allPosts.map((post) => {
                        return(
                            <UserPanel key={post.id} user={post} addComment={this.addCommentToUserPanel} getLoggedUser={this.getLoggedUser} addLike={this.addOrRemoveLikeToPost} showModal={this.props.showModal}/>
                        )
                    })}
                </div>
                <div className="col-3 p-40-x">
                    <ArticlePanel article={article}/>
                    <PeopleYouMayKnowPanel connections={possibleConnections} />
                </div>
            </div>
        </div>
    );
}

}

export default Main;

// Main.propTypes = {
    
// }