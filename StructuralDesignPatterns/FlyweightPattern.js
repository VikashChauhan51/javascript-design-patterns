/*The Flyweight pattern is a classical structural solution for optimizing code that is repetitive,
 slow and inefficiently shares data. It aims to minimize the use of memory in an application by sharing 
 as much data as possible with related objects (e.g application configuration, state and so on). 
 Flyweight share data across objects.*/

var Task = function (name, completed) {
  this.name = name;
  //shared
  this.flyweight = FlyweightFactory.get(completed);
};

function TaskCollection() {
  var tasks = {};
  var count = 0;
  var add = function (name, completed) {
    tasks[name] = new Task(name, completed);
    count++;
  };
  var get = function (name) {
    return tasks[name];
  };
  var getCount = function () {
    return count;
  };
  return {
    add: add,
    get: get,
    getCount: getCount,
  };
}

//Lets create a Flyweight factory
var Flyweight = function (completed) {
  this.completed = completed;
};
var FlyweightFactory = (function () {
  var flyweights = {};
  var get = function (completed) {
    if (!flyweights[completed]) {
      flyweights[completed] = new Flyweight(completed);
    }
    return flyweights[completed];
  };
  var getCount = function () {
    var count = 0;
    for (var item in flyweights) {
      count++;
    }
    return count;
  };
  return {
    get: get,
    getCount: getCount,
  };
})();

var tasks = new TaskCollection();

for (var i = 0; i < 10000; i++) {
  tasks.add("Task" + i, i % 2 == 0); // it will take more memory without FlyweightFactory.
}
console.log(tasks.getCount());
console.log(FlyweightFactory.getCount()); //shared object.
//reference issue.
console.log(tasks.get("Task1"));
console.log(tasks.get("Task3"));
console.log(tasks.get("Task2"));
console.log(tasks.get("Task5"));
console.log("******************");
tasks.get("Task1").flyweight.completed=true;
console.log(tasks.get("Task1"));
console.log(tasks.get("Task3"));
console.log(tasks.get("Task2"));
console.log(tasks.get("Task5"));