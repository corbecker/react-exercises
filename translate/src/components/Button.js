import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {
  // property must be named contextType to work
  static contextType = LanguageContext;

  render() {
    const name = this.context === 'english' ? 'Submit' : 'Voorleggen';

    return (
      <button className="ui button primary" > {name}</button>
    )
  };
};

export default Button;