import React, { Component } from 'react';
import '../App.css';

class ConfirmationModal extends Component {
  constructor(props) {
    super(props);
  }

  closeModal() {
      document.querySelector('.modal').classList.remove('show');
  }

  render () {
    return (
      <div className="modal">
        <h3>{this.props.modalMessage}</h3>
        <div className="modal-options">
          <button
            onClick={this.completeAction}
            className="btn">Yes</button>
          <button
            onClick={this.closeModal}
            className="btn">Cancel</button>
        </div>
      </div>
    )
  }
}


export default ConfirmationModal;
