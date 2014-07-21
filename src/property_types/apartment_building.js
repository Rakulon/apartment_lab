var property = require("./property.js");
var inherit = require("../inherit.js");

function ApartmentBuilding(name, address) {
  // A building can have many many units 
  property.call(this, address);
  this.name = name;
}


module.exports = ApartmentBuilding;
inherit(ApartmentBuilding, property)