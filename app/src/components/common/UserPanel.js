import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { hasDuplicates } from '../../utils/Utils';
import * as constants from '../../constants/Constants';

class UserPanel extends Component {

  state = {
    commentBoxOpen:false,
    newCommentByLoggedUser:{},
    showLoadMore:true,
    currentCommentsIndex:2,
    loggedUserAlreadyLikedPost:false
  }

  constructor(props){
      super(props);
    this.openCommentBox = this.openCommentBox.bind(this);
    this.addComment = this.addComment.bind(this);
    this.newCommentOnChange = this.newCommentOnChange.bind(this);
    this.updateCurrentCommentsShown = this.updateCurrentCommentsShown.bind(this);
    this.addOrRemoveLike = this.addOrRemoveLike.bind(this);
    this.buildLikesForModal = this.buildLikesForModal.bind(this);
  }

  componentDidMount(){
    const { user , getLoggedUser} = this.props;
    let loggedUser = getLoggedUser();
    let retVal = hasDuplicates(user.likes,loggedUser.id,'id');
    this.setState({
      loggedUserAlreadyLikedPost: retVal >= 0 ? true : false
    })
  }


  updateCurrentCommentsShown(){
    this.setState({
      currentCommentsIndex:this.state.currentCommentsIndex + 3
    })
  }
  

  openCommentBox(){
    this.setState({
      commentBoxOpen:!this.state.commentBoxOpen
    });
  }

  addComment(e){
    const newCommentByLoggedUser = () => {
        let { newCommentByLoggedUser } = this.state;
        let loggedUser = this.props.getLoggedUser();
        newCommentByLoggedUser = {...newCommentByLoggedUser,photoURL:loggedUser.photoURL ? loggedUser.photoURL : './assets/images/avatar.png'};
        newCommentByLoggedUser = {...newCommentByLoggedUser,name:loggedUser.name ? loggedUser.name : 'Default User'};
        newCommentByLoggedUser = {...newCommentByLoggedUser,date:'Today'}
        newCommentByLoggedUser = {...newCommentByLoggedUser,likes:0}
        this.props.addComment(newCommentByLoggedUser);
        this.setState({
          newCommentByLoggedUser:{},
          commentBoxOpen:false
        });
    }

    if(e === undefined) newCommentByLoggedUser();
    else if(e.keyCode === 13 || e.which === 13){
      newCommentByLoggedUser();
    }
    
  }

  newCommentOnChange(e){
    let newCommentByLoggedUser = this.state.newCommentByLoggedUser;
    newCommentByLoggedUser = {...newCommentByLoggedUser,comment:e.target.value};
    this.setState({newCommentByLoggedUser});
  }

  addOrRemoveLike(){
    const { user , getLoggedUser} = this.props;
    this.props.addLike(user,getLoggedUser());
    this.setState({
      loggedUserAlreadyLikedPost:!this.state.loggedUserAlreadyLikedPost
    })
  }

  buildLikesForModal(){
    const { user } = this.props;
    return (
      user.likes.map((like) => {
        return (
          <div key={like.id} className="modal-like">
            <img src={like.photoURL} alt="like"/>
            <p>{like.name}</p>
          </div>
        )
      })
    )
  }

  render() {
    
    const { commentBoxOpen,newCommentByLoggedUser, showLoadMore, currentCommentsIndex ,loggedUserAlreadyLikedPost} = this.state;
    const { user } = this.props;
    
    return (
        <div className="panel">
          <p className="timestamp">{user.date}</p>
          <div className="user-area">
            <div className="userProfile">
              <img className="large-image" src={user.photoURL}/>
            </div>
            <div className="user-name-role">
              <a href="#">{user.name}</a>
              <span>-</span>
              <p>{user.jobRole}</p>
            </div>
            <div className="post-area col-12">
              <p className="post">{user.text}</p>
            </div>
            <div className="col-12 m-10-y">
              <a className="likes" onClick={() => this.props.showModal(constants.SHOW_LIKES_TYPE,this.buildLikesForModal)}>{user.likes && user.likes.length} Likes</a>
              <span className="line">-</span>
              <a className="comments">{user.comments && user.comments.length} Comments</a>
            </div>
          </div>
          <div className="comments">
            {user.comments && user.comments.slice(0,currentCommentsIndex).map((comment) => {
              return (
                <div  key={comment.id} className="comment">
                  <img className="small-image" src={comment.photoURL} />
                  <p><a href="#">{comment.name}</a><span>{comment.comment}</span></p>
                  <p className="timestamp">{comment.date}</p>
                </div>
              );
            })}
            {
              user.comments && user.comments.length > 2 && showLoadMore && currentCommentsIndex <= user.comments.length && 
               <a className="load-more" onClick={this.updateCurrentCommentsShown}>Load more comments...</a>
            }
            {commentBoxOpen && <div className="comment-box m-10-y">
              <textarea row="4" col="50" placeholder="Add Comment (Press Enter or Hit button)" onChange={this.newCommentOnChange} onKeyDown={this.addComment.bind(this)} value={newCommentByLoggedUser.comment}></textarea>
              <button type="button" onClick={this.addComment}>Enter</button>
            </div>}
          </div>
          <div className="col-12">
          <div className="userpanel-options">
            <button onClick={this.addOrRemoveLike}><i className={loggedUserAlreadyLikedPost ? "fas fa-heart heart" : 'fas fa-heart'}></i>Like</button>
            <button onClick={this.openCommentBox}><i className="fas fa-comment"></i>Comment</button>
            <button><i className="fas fa-share"></i>Share</button>
          </div>
          </div>
        </div>
    );
  }
}

export default UserPanel;

// UserPanel.propTypes = {
    
// }