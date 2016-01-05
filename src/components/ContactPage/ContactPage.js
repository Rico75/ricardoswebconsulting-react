/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
const FontAwesome = require('react-fontawesome');

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
    submitting: PropTypes.bool.isRequired,
  };

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  /*
  handleSubmit = function(event) {
    event.preventDefault();
    console.log('Submission received!');
  };
  */

  render() {
    const {
      fields: {firstName, lastName, email, notes},
      handleSubmit,
      resetForm,
      submitting,
    } = this.props;

    const title = 'Contact Us';
    this.context.onSetTitle(title);

    return (
      <div className="ContactPage">
        <div className="ContactPage-form">
          <h1>{title}</h1>
          <form onSubmit={handleSubmit} className="form-horizontal">
            <div className="form-group">
              <label className="col-sm-2 control-label">First Name</label>
              <div className="col-sm-10">
                <input type="text" id="contact-first-name" className="form-control" placeholder="First Name" {...firstName}/>
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label">Last Name</label>
              <div className="col-sm-10">
                <input type="text" id="contact-last-name" className="form-control" placeholder="Last Name" {...lastName}/>
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label">Email</label>
              <div className="col-sm-10">
                <input type="email" id="contact-email" className="form-control" placeholder="Email" {...email}/>
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label">Message</label>
              <div className="col-sm-10">
                <textarea
                  id="contact-message"
                  className="form-control"
                  {...notes}
                  value={notes.value || ''}       // required for reset form to work (only on textarea's)
                                                  // see: https://github.com/facebook/react/issues/2533
                />
              </div>
            </div>

            <div className="Contact-button-group">
              <button disabled={submitting} type="submit" className="btn btn-primary btn-lg">
                {submitting ? <FontAwesome name="paper-plane" /> : <FontAwesome name="paper-plane-o" /> } Submit
              </button>
              <button disabled={submitting} onClick={resetForm} className="btn btn-cancel btn-lg">
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
  fields: ['firstName', 'lastName', 'email', 'notes'], // all the fields in your form
})(ContactPage);

export default ContactPage;
