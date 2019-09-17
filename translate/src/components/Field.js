import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
  static contextType = LanguageContext;

  render() {
    const text = this.context === 'english' ? 'Submit' : 'Naam';
    return (
      <div className="ui field">
        <label className="ui">{text}</label>
        <input />
      </div>
    )
  };
};

export default Field;