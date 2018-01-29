/**
 * Identify the Big-O time complexity of the following functions,
 * relative to the size of the input
 */

var TimeComplexity = {
  FIX_ME: 'wrong answer',
  CONSTANT: 'constant',
  LOGARITHMIC: 'logarithmic',
  LINEAR: 'linear',
  QUADRATIC: 'quadratic',
  EXPONENTIAL: 'exponential'
};


var sortedIndexOfTimeComplexity =  TimeComplexity.LOGARITHMIC; // TODO: This is a
// binary search Tree, so accessing the target element is logarithmic.

var sortedIndexOf = function(array, targetElement) {
  var minIndex = 0;
  var maxIndex = array.length - 1;
  var currentIndex;
  var currentElement;

  while (minIndex <= maxIndex) {
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    currentElement = array[currentIndex];

    if (currentElement < targetElement) {
      minIndex = currentIndex + 1;
    } else if (currentElement > targetElement) {
      maxIndex = currentIndex - 1;
    } else {
      return currentIndex;
    }
  }

  return -1;
};


var findDuplicatesTimeComplexity =  TimeComplexity.LINEAR; // TODO: Searching
// for the letter requires iterating through a string, which is linear.

var findDuplicates = function(string) {
  var tracker = {};
  var result = [];
  for (var i = 0; i < string.length; i++) {
    var letter = string[i];
    tracker[letter] = tracker[letter] || 0;

    if (tracker[letter] === 1) {
      result.push(letter);
    }

    tracker[letter] += 1;
  }
  return result;
};


var bruteForcePasswordTimeComplexity =  TimeComplexity.EXPONENTIAL; // TODO: Searching
// for the password requires iterating through the alphabet and if attempt length increases,
// it increases at an exponential rate.

var bruteForcePassword = function(max) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';

  var findPassword = function(attempt) {
    if (attempt.length > 0) {
      console.log('Trying ' + attempt);
    }
    if (attempt.length <= max) {
      for (var i = 0; i < alphabet.length; i++) {
        findPassword(attempt.concat(alphabet[i]));
      }
    }
  };

  findPassword('');
};


var hasDuplicatesTimeComplexity =  TimeComplexity.QUADRATIC; // TODO: Searching
// for duplicates is linear, but since we are creating a new array with slice, it
// becomes quadratic.

var hasDuplicates = function(array) {
  for (var i = 0; i < array.length; i++) {
    var item = array[i];
    if (array.slice(i + 1).indexOf(item) !== -1) {
      return true;
    }
  }
  return false;
};



var removeLastThreeElementsTimeComplexity =  TimeComplexity.CONSTANT; // TODO: Removing
// the last 3 elements from the array is constant because we know exactly where those
// indexes at the end.

var removeLastThreeElements = function(array) {
  var numberOfElementsToRemove = 3;

  while (numberOfElementsToRemove-- > 0) {
    array.pop();
  }
};


var increasingStepTimeComplexity =  TimeComplexity.LOGARITHMIC; // TODO: Increasing the time
// requires iterating through the number, but the number is doubled, reducing the iterating time
// half each time.

var increasingStep = function(number) {
  for (var i = 1; i < number; i = i * 2) {
    console.log(i);
  }
};


var makeRangeTimeComplexity =  TimeComplexity.LINEAR; // TODO: This function has to
// iterate through the array, which is at a linear time.

var makeRange = function(array) {
  array.forEach(function(item) {
    for (var i = 1; i < 10; i++) {
      console.log(item + i);
    }
  });
};

// Completed
