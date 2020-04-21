/* The Singleton pattern is thus known because it restricts instantiation of a class to a single object.
Singletons differ from static classes (or objects) as we can delay their initialization, generally because 
they require some information that may not be available during initialization time.
In JavaScript, Singletons serve as a shared resource namespace which isolate implementation code from the global
 namespace so as to provide a single point of access for functions.*/


var mySingleton = (function () {
 
    // Instance stores a reference to the Singleton
    var instance;
   
    function init() {
   
      // Singleton
   
      // Private methods and variables
      function privateMethod(){
          console.log( "I am private" );
      }
   
      var privateVariable = "Im also private";
   
      var privateRandomNumber = Math.random();
   
      return {
   
        // Public methods and variables
        publicMethod: function () {
          console.log( "The public can see me!" );
        },
   
        publicProperty: "I am also public",
   
        getRandomNumber: function() {
          return privateRandomNumber;
        }
   
      };
   
    };
   
    return {
   
      // Get the Singleton instance if one exists
      // or create one if it doesn't
      getInstance: function () {
   
        if ( !instance ) {
          instance = init();
        }
   
        return instance;
      }
   
    };
   
  })();

  //user it
  var obj1=mySingleton.getInstance();
  var obj2=mySingleton.getInstance();
  console.log(obj1===obj2)