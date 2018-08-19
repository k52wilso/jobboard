import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SharePanel extends Component {

  state = {
    links:[],
    selectedLink:1
  }

  constructor(){
    super();

    this._activateLink = this._activateLink.bind(this);
}

componentDidMount(){
    this.setState({
        links:[{
            id:1,
            name:'Share an update',
            icon:(<span className="badge yellow-badge"><i className="fas fa-comments"></i></span>)
        },{
            id:2,
            name:'Upload a photo/video',
            icon:(<span className="badge purple-badge"><i className="fas fa-camera"></i></span>)
        },{
            id:3,
            name:'Share a post',
            icon:(<span className="badge blue-badge"><i className="fas fa-pencil-alt"></i></span>)
        }]
    });
}

_activateLink(id,e){
  this.setState({
      selectedLink:id
  })
}

  render() {
    
    const { links, selectedLink } = this.state;
    
    return (
        <div className="share-panel">
            <ul>
                { links &&
                    links.map((link) => {
                        return (
                            <li key={link.id} className={selectedLink === link.id ? 'active' : ''} onClick={this._activateLink.bind(this,link.id)}>{link.icon}{link.name}</li>
                        );
                    })
                }
            </ul>
            {selectedLink === 1 && (<div className="panel">
                <textarea col="4" row="50" placeholder="What's on your mind?"></textarea>
                <div className="buttons">
                <span>
                    <i className="fas fa-paperclip"></i>
                </span>
                <span>
                    <i className="fas fa-camera"></i>
                </span>
                <button type="button" className="post-button">
                    POST<i className="fas fa-arrow-right"></i>
                </button>
                </div>
            </div>)}
            {selectedLink === 2 && (<div className="panel uploads">
                <div className="upload">
                    <i className="fas fa-camera"></i>
                    <p>Photo</p>
                </div>
                <div className="upload">
                    <i className="fas fa-camera"></i>
                    <p>Video</p>
                </div>
            </div>)}
        </div>
    );
  }
}

export default SharePanel;

// SharePanel.propTypes = {
    
// }