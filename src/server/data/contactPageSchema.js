var mongoose = require("mongoose");
var contactPageSchema = mongoose.Schema({
    ContactFirstName : String,
    ContactLastName  : String,
    ContactEmail     : String,
    Message          : String
});

module.exports = mongoose.model("Contact", contactPageSchema);
