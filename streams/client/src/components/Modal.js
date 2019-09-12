import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
  return ReactDOM.createPortal(
    <div
      onClick={props.onDismiss}
      className="ui dimmer modals page visible active"
    >
      <div
        className="ui mini test modal transition visible active"
        onClick={e => e.stopPropagation()}
      >
        <div className="header">{props.header}</div>
        <div className="content"><p>{props.content}</p></div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector('#modal')
  )
};

export default Modal;