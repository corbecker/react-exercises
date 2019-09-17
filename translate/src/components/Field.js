import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {

  render() {
    return (
      <div className="ui field">
        <label className="ui">
          <LanguageContext.Consumer>
            {(value) => value === 'english' ? 'Submit' : 'Voorleggen'}
          </LanguageContext.Consumer>
        </label>
        <input />
      </div>
    )
  };
};

export default Field;