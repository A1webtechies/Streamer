import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createStream } from "../../../actions";
class CreateStream extends Component {
  renderErrors = ({ touched, error }) => {
    return touched && error ? (
      <span className="helper-text" data-error={error}></span>
    ) : (
      ""
    );
  };
  renderInput = ({ input, placeholder, meta }) => {
    const errClass = meta.touched && meta.error ? "invalid" : "";
    return (
      <div className="input-field">
        <input type="text" {...input} className={errClass} />
        <label>{placeholder}</label>
        {this.renderErrors(meta)}
      </div>
    );
  };
  onSubmit = formData => {
    this.props.createStream(formData);
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="row">
        <div className="col m8 s12 offset-m2">
          <div className="card-panel grey lighten-3 ">
            <h5 className="center-align ">Create Stream</h5>
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
              <Field
                name="title"
                component={this.renderInput}
                placeholder="Title"
              />
              <Field
                name="description"
                component={this.renderInput}
                placeholder="Description"
              />
              <div className="center-align">
                <button className="btn "> Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
const validate = formValues => {
  const errors = {};
  if (!formValues.title || formValues.title.length <= 3) {
    errors.title = "Title must be greater than 3 characters";
  }
  if (!formValues.description || formValues.description.length <= 10) {
    errors.description = "Description must be greater than 10 characters";
  }
  return errors;
};
export default connect(
  null,
  { createStream }
)(
  reduxForm({
    form: "createStream",
    validate
  })(CreateStream)
);
