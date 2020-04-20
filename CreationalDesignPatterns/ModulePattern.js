/*The Module pattern was originally defined as a way to provide both 
private and public encapsulation for classes in conventional software engineering.
Here's one that covers namespacing, public and private variables: */

var counterModule = (function () {
 
    //private field
  var counter = 0;
 
  return {
 
    incrementCounter: function () {
      return counter++;
    },
 
    resetCounter: function () {
      console.log( "counter value prior to reset: " + counter );
      counter = 0;
    },
    gettCounter: function () {
        return counter;
      }
  };
 
})();

counterModule.incrementCounter();
console.log(counterModule.gettCounter());
counterModule.resetCounter();