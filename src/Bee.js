var Bee = function() {
  // take 'this' bee instance and call Grub superclass properties (only properties, not methods)
  // overwriting needs to happen after call and those properties are set
  Grub.call(this);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};

Bee.prototype = Object.create(Grub.prototype);
// ^ this destroy the default Bee.prototype.constructor and assigns the Grub constructor to .constructor
//   so we need to recreate it...
Bee.prototype.constructor = Bee;

// 1 Call Constructor
// 2 Copy Methods from constructor prototype
// 3 reassign constructor to current function Constructor

/*
ES6 Version

class Bee extends Grub {
  constructor() {
    super() // Grub.call(this);

    this.age = 5;
    this.color = 'yellow';
    this.job = 'keep on growing';
  }

  fly() {
    // How to add methods ES6
  }
}
*/