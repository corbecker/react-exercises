import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {

  renderInput({ input, label }) {

    return (
      //spread in all the props passed in from redux-form
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  };

  onSubmit(formValues) {
    console.log(formValues);

  }

  render() {
    return (
      <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="title" component={this.renderInput} label="Title" />
        <Field name="description" component={this.renderInput} label="Description" />
        <button className="ui button primary" type="submit">Submit</button>
      </form>
    )
  };
};

export default reduxForm({
  form: 'streamCreate'
})(StreamCreate);