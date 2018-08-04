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
    return (
        <div className="panel">
            <img className="article-photo" src={article.photoURL}/>
            <div className="article">
                <h4 className="article-title">{article.title}</h4>
                <p className="article-text">{article.text}</p>
                <p className="article-date-author">{article.date} - {article.author}</p>    
            </div>
        </div>
    );
  }
}

export default ArticlePanel;

