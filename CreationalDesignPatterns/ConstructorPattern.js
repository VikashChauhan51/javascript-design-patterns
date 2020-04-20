/*As we saw earlier, JavaScript doesn't support the concept of classes but it does support special constructor functions
 that work with objects.By simply prefixing a call to a constructor function with the keyword "new", we can tell JavaScript 
 we would like the function to behave like a constructor and instantiate a new object with the members defined by that function.
Inside a constructor, the keyword this references the new object that's being created */

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


//lets create an instance of Task constructor object

var obj1=new Task("Constructor Pattern1");
var obj2=new Task("Constructor Pattern2");
var obj3=new Task("Constructor Pattern3");

obj1.setCompleted(); //here this is  obj1
obj2.setCompleted(); //here this is  obj2
obj3.setCompleted(); //here this is  obj3