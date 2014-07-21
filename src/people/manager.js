var inherit = require('../inherit');
var person = require("./person");

function Manager(name, contact) {
  // set name and contact
  person.call(this, name, contact)
  this.properties = [];
}

Manager.prototype.addProperty = function(property) {
  // add property from properties
  this.properties.push(property);
};

Manager.prototype.removeProperty = function(property) {
  // remove properties
  this.properties.remove(property);
};

module.exports = Manager;
inherit(Manager, person);