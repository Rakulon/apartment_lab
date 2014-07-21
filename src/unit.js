function Unit (number, building, sqft, rent) {
  // set params above using this
  this.building = building;
  this.number = number;
  this.sqft = sqft;
  this.rent = rent;
  this.tenant = null;
}

Unit.prototype.available = function(){
  // check for tenant
  return this.tenant === null;
};

module.exports = Unit;