var inherit = require('../inherit.js');
var person = require("./person.js");

function Tenant(name, contact) {
  // set this.name, and contact
  person.call(this, name, contact);
  this.references = [];
};

Tenant.prototype.addReference = function(reference){
  // add reference to references
  this.references.push(reference);
};

module.exports = Tenant;
inherit(Tenant, person);