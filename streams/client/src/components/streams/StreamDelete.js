import React from 'react';
import Modal from '../Modal';

const StreamDelete = () => {

  const actions = (
    <div>
      <button className="ui button">Cancel</button>
      <button className="ui button negative">Delete</button>
    </div>
  )
  return (
    <Modal
      header="Delete Stream"
      content="Are you sure you want to delete this stream?"
      actions={actions}></Modal>
  )
};

export default StreamDelete;