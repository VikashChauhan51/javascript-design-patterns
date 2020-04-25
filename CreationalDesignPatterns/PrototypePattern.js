/*The prototype pattern as one which creates objects based on a template of an existing object through cloning.
 The prototype pattern as being based on prototypal inheritance where we create objects which act as prototypes for other objects. 
 The prototype object itself is effectively used as a blueprint for each object the constructor creates.
 Not only is the pattern an easy way to implement inheritance, but it can also come with a performance boost as well:
 when defining a function in an object, they're all created by reference (so all child objects point to the same function) instead of
 creating their own individual copies.*/

var Task = function (name) {
    // instance related isolated fields
    this.name = name;
    this.completed = false;
  };
  
  //Task shared members (only signle copy of 'setCompleted' function with all objects of Task)
  Task.prototype.setCompleted = function () {
    console.log(this.name + " task has been completed");
    this.completed = true;
  };
  
  
  //lets create an instance of Task 
  
  var obj1=new Task("prototype");
  var obj2=new Task("prototype");
  console.log(obj1.constructor.name); //Task
  console.log(obj2.constructor.name); //Task
  console.log(obj1===obj2); //false
  console.log(obj1.setCompleted===obj2.setCompleted); //true
  console.log(obj1.prototype===obj2.prototype); //true