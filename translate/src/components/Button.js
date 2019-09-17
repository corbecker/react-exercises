import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColourContext from '../contexts/ColourContext';

class Button extends React.Component {

  static contextType = LanguageContext;

  render() {

    const text = this.context.language === 'english' ? 'Submit' : 'Voorleggen';

    return (

      <ColourContext.Consumer>
        {(colour) =>
          <button className={`ui button ${colour}`} >{text}</button>
        }
      </ColourContext.Consumer>
    )
  };
};

export default Button;