function Property(address) {
  this.manager = null;
  this.address = address;
  this.units = [];
}

Property.prototype.setManager = function(person) {
  // set this.manager to person
  this.manager = person;
};

Property.prototype.getManager = function(){
  // return this.manager 
  return this.manager;
};

Property.prototype.addUnit = function(unit) {
	this.units.push(unit);
};

Property.prototype.addTenant = function(unit, tenant) {
  // add tenant but check to make sure there
  // is a manager first and a tenant has 2 references
  if (this.manager !== null && tenant.references.length >= 2) {
  	unit.tenant = tenant;
  }
};

Property.prototype.removeTenant = function(unit, tenant) {
  // remove tenant
  unit.tenant = null;
};

Property.prototype.availableUnits = function(){
  // return num of units available
  return this.units.filter(function(unit, index, arr) {
  	return unit.available();
  });
}

Property.prototype.rentedUnits = function(){
  // return rented units
  return this.units.filter(function(unit, index, arr) {
  	return !unit.available();
  });
}


module.exports = Property;
