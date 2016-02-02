import mongoose from 'mongoose';
import contact from '../data/contactPageSchema';
import _ from 'underscore';
var router = require("express").Router();

router.route('/contact/:id?').get(getContact).post(addContact);

function getContact(req, res) {
    contact.find(function (err, contact) {
        if (err)
            res.send(err);
        else
            res.json(contact);
    });
}

function addContact(req, res) {
    var contact = new Contact(_.extend({}, req.body));
    contact.save(function (err) {
        if (err)
            res.send(err);
        else
            res.json(school);
    });
}

module.exports = router;
