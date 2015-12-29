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
      fields: {firstName, lastName, email, notes},
      handleSubmit,
      resetForm,
      submitting
    } = this.props;

    const title = 'Contact Us';
    this.context.onSetTitle(title);

    return (
      <div className="ContactPage">
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
            <div>
              <label>Message</label>
              <textarea
                {...notes}
                value={notes.value || ''}       // required for reset form to work (only on textarea's)
                                                // see: https://github.com/facebook/react/issues/2533
              />
            </div>

            <div>
              <button disabled={submitting} onClick={handleSubmit} className="btn btn-primary btn-lg">
                {submitting ? <i className="fa fa-paper-plane" /> : <i className="fa fa-paper-plane" />} Submit
              </button>
              <button disabled={submitting} onClick={resetForm}>
                Clear Values
              </button>
            </div>

          </form>
        </div>
      </div>

    );
  }
}

ContactPage = reduxForm({ // <----- THIS IS THE IMPORTANT PART!
  form: 'contact',                           // a unique name for this form
  fields: ['firstName', 'lastName', 'email', 'notes'] // all the fields in your form
})(ContactPage);

export default ContactPage;
