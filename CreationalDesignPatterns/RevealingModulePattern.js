/*The Revealing Module pattern came about as Heilmann was frustrated with the fact that he had to repeat
 the name of the main object when we wanted to call one public method from another or access public variables. 
 He also disliked the Module pattern’s requirement for having to switch to object literal notation for the 
 things he wished to make public.

The result of his efforts was an updated pattern where we would simply define all of our functions and variables
 in the private scope and return an anonymous object with pointers to the private functionality we wished to reveal as public */

 var myRevealingModule = (function () {
 
    var privateVar = "It's me",
        publicVar = "Hey there!";

    function privateFunction() {
        console.log( "Name:" + privateVar );
    }

    function publicSetName( strName ) {
        privateVar = strName;
    }

    function publicGetName() {
        privateFunction();
    }


    // Reveal public pointers to
    // private functions and properties

    return {
        setName: publicSetName,
        greeting: publicVar,
        getName: publicGetName
    };

})();

myRevealingModule.setName( "Vikash Chauhan" );