import React, { Component } from 'react';


class Modal extends Component {

  state = {
    isVisible:false
  }

  constructor(props){
      super(props);
    
  }

  render() {
    
    const { modalShow , modalType ,content } = this.props;
    
    return ( modalShow &&
        <div className="modal">
          <div className="main fadein">
            <div className="modal-title">
                {
                    modalType === 'LIKES' && (
                        <h3>All Likes<i className="fas fa-heart"></i></h3>
                    )
                }
            </div>
            <div className="modal-body">
                {content()}
            </div>
            <div className="modal-footer">
                    
            </div>
            <span className="close" onClick={this.props.show}><i className="fas fa-times"></i></span>
          </div>
        </div>
    );
  }
}

export default Modal;

// Modal.propTypes = {
    
// }