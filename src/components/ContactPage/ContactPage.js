/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import styles from './ContactPage.css';
import withStyles from '../../decorators/withStyles';
export const fields = ['firstName', 'lastName', 'email'];



@withStyles(styles)
class ContactPage extends Component {

  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
  };

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };


  render() {
    const {
      fields: {firstName, lastName, email},
      handleSubmit,
      resetForm,
      submitting
    } = this.props;

    const title = 'Contact Us';
    this.context.onSetTitle(title);

    return (
      <div className="ContactPage-form">
        <h1>{title}</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name</label>
            <input type="text" placeholder="First Name" {...firstName}/>
          </div>
          <div>
            <label>Last Name</label>
            <input type="text" placeholder="Last Name" {...lastName}/>
          </div>
          <div>
            <label>Email</label>
            <input type="email" placeholder="Email" {...email}/>
          </div>
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

ContactPage = reduxForm({ // <----- THIS IS THE IMPORTANT PART!
  form: 'contact',                           // a unique name for this form
  fields: ['firstName', 'lastName', 'email'] // all the fields in your form
})(ContactPage);

export default ContactPage;
