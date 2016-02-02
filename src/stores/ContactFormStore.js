import React, {Component} from 'react';
import dispatcher from '../core/Dispatcher';
var contactService = require("../services/contactFormServices");

class ContactStore extends Component {
    constructor(props) {
      super(props);
      this.listeners = [];
    }

    onChange(listener) {
        this.getContact(listener);
        this.listeners.push(listener);
    }

    getContact(cb){
        contactService.getContact().then(function (res) {
            cb(res);
        });
    }

    addContact(contact) {
        contactService.addContact(contact).then(function (res) {
            console.log(res);
            triggerListeners();
        });
    }

    triggerListeners() {
        getContact(function (res) {
            listeners.forEach(function (listener) {
                listener(res);
            });
        });
    }
}

export default ContactStore;
