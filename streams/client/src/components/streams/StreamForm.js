import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      )
    };
  };

  renderInput = ({ input, label, meta }) => {
    // error classname on the form so that semantic ui doesnt hide errors
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      //spread in all the props passed in from redux-form
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  render() {

    console.log(this.props)
    return (
      <form className="ui form error" onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
        <Field
          name="title"
          component={this.renderInput}
          label="Title"
        />
        <Field
          name="description"
          component={this.renderInput}
          label="Description"
        />
        <button className="ui button primary" type="submit">Submit</button>
      </form>
    )
  };
};

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter a title."
  }

  if (!formValues.description) {
    errors.description = "You must enter a description."
  }

  return errors;
}

export default reduxForm({
  form: 'streamForm',
  validate: validate
})(StreamForm);