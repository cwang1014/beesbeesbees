var Grub = function() {
  // this = Object.create(Grub.prototype);
  // this === the object that will be created

  this.age = 0;
  this.color = 'pink';
  this.food = 'jelly';

  // return this
};

Grub.prototype.eat = function() {
};


// the `new` keyword
// - create a new object instance
// - connects the new objecct to <Constructor>.prototype using prototypal delegation
// - run the constructor function in the context of the new object
// - gives you the new object to use