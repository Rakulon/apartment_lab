var property = require("./property");
var inherit = require("../inherit.js");

function TownHouse(address){
  // only has one unit per address
  property.call(this, address);
};

TownHouse.prototype.addTenant = function(unit) {
  if (this.units.length < 1) {
  	property.addUnit.call(unit);
  } 
};

module.exports = TownHouse;
inherit(TownHouse, property);