var property = require("./property");
var inherit = require("../inherit.js");

function Duplex(address) {
  // A duplex only has 2 units;
  property.call(this, address);
}
Duplex.prototype.addUnit = function(unit) {
  if (this.units.length < 2) {
  	property.addUnit.call(unit);
  } 
};

Duplex.protoype.addTenant = function(unit, tenant) {
	if (tenant.money > 500) {
		property.addTenant.call(unit, tenant);
	}
}
module.exports = Duplex;
inherit(Duplex, property)