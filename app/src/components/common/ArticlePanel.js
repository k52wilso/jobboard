import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ArticlePanel extends Component {

  state = {
       
  }

  constructor(props){
      super(props);

  }

  

  render() {
    const { article } = this.props;
    const dateString = (new Date(article.date)).toISOString().split("T")[0];
    return (
        <div className="panel col-3">
            <img className="article-photo" src={article.photoURL}/>
            <div className="article">
                <h4 className="article-title">{article.title}</h4>
                <p className="article-text">{article.text}</p>
                <p className="article-date-author">{dateString} - {article.author}</p>    
            </div>
        </div>
    );
  }
}

export default ArticlePanel;

