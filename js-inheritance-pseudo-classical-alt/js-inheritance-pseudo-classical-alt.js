// We've provided `makeHorse` and `makeFlyingHorse` for you, written using the
// functional pattern. Your task is to rewrite these classes to use the
// pseudoclassical pattern. They should have all the same methods as the
// objects returned from the maker functions except in pseudo classical style.
// You must be able to use your new functions to create new horse instances,
// just like this:
//
//   var myHorse = new Horse();
//   var myFlyingHorse = new FlyingHorse();
//

// DO NOT MODIFY FUNCTIONS 'makeHorse' AND 'makeFlyingHorse'
// USE THE CONSTRUCTOR FUNCTIONS LOCATED AT THE END OF THIS FILE

var makeHorse = function(name) {
  var result = {};
  result.name = name;
  result.goSomewhere = function(destination) {
    return name + ' is galloping to ' + destination + '!';
  };
  return result;
};

var makeFlyingHorse = function(name, color) {
  var result = makeHorse(name);
  result.color = color;
  var oldGoSomewhere = result.goSomewhere;
  result.goSomewhere = function(destination, milesToDestination) {
    if (milesToDestination < 10) {
      return oldGoSomewhere(destination);
    } else {
      return name + ' is flying to ' + destination + '!';
    }
  };
  return result;
};

// YOUR WORK GOES BELOW
// Here's some starter code to get you going!

// Function: Horse
var Horse = function(name) {
  var result = {};
  result.name = name;

  return result;
};

// Horse Method: Go Somewhere
Horse.prototype.goSomewhere = function(destination){
  return this.name + ' is galloping to ' + this.destination + '!';
}

// Create new instance of object
var horse = new Horse();


// Function: Flying Horse
var FlyingHorse = function(name, color) {
  var result = {};
  result.color = color;

  return result;
};

// FlyingHorse Method: Go Somewhere
FlyingHorse.prototype.goSomewhere = function(destination, milesToDestination){
  if (this.milesToDestination < 10){
    return goSomewhere(this.destination);
  }
  else{
    return this.name + ' is flying to ' + this.destination + '!';
  }
}

// Create new instance of object
var flyingHorse = new FlyingHorse();

// Complete
