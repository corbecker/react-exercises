import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {

  renderInput({ input }) {

    return (
      //spread in all the props passed in from redux-form
      <input {...input} />
    );
  };

  render() {
    return (
      <form>
        <Field name="title" component={this.renderInput} />
        <Field name="description" component={this.renderInput} />
      </form>
    )
  };
};

export default reduxForm({
  form: 'streamCreate'
})(StreamCreate);