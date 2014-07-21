function inherit(Child, Parent) {
  Child.prototype = new Parent();
  Child.prototype.constructor = Child;
};

module.exports = inherit;
