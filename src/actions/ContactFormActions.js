import dispatcher from '../core/Dispatcher';

module.exports = {
  addContact: function addContact(contact) {
    console.log('addContact');
    console.log('contact: ', contact);
    dispatcher.dispatch({
      contact: contact,
      type: 'contact:addContact',
    });
  },
};
