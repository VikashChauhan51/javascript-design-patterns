/*Decorators are a structural design pattern that aim to promote code re-use. 
Similar to Mixins, they can be considered another viable alternative to object sub-classing. 
Classically, Decorators offered the ability to add behaviour to existing classes in a system dynamically.
They can be used to modify existing systems where we wish to add additional features to objects without the
 need to heavily modify the underlying code using them.*/

 // The constructor to decorate
function MacBook() {
 
    this.cost = function () { return 997; };
    this.screenSize = function () { return 11.6; };
   
  }
   
  // Decorator 1
  function memory( macbook ) {
   
    var v = macbook.cost();
    macbook.cost = function() {
      return v + 75;
    };
   
  }
   
  // Decorator 2
  function engraving( macbook ){
   
    var v = macbook.cost();
    macbook.cost = function(){
      return v + 200;
    };
   
  }
   
  // Decorator 3
  function insurance( macbook ){
   
    var v = macbook.cost();
    macbook.cost = function(){
       return v + 250;
    };
   
  }
   
  var mb = new MacBook();
  memory( mb );
  engraving( mb );
  insurance( mb );
   
  // Outputs: 1522
  console.log( mb.cost() );
   
  // Outputs: 11.6
  console.log( mb.screenSize() );