/*The Factory pattern is another creational pattern concerned with the notion of creating objects.
 Where it differs from the other patterns in its category is that it doesn't explicitly require us to
  use a constructor. Instead, a Factory can provide a generic interface for creating objects, where we 
  can specify the type of factory object we wish to be created. */

var FullTime = function () {
  this.hourly = "$12";
};

var PartTime = function () {
  this.hourly = "$11";
};

var Temporary = function () {
  this.hourly = "$10";
};

var Contractor = function () {
  this.hourly = "$15";
};

var EmployeeFactory = function () {
  var emps = this;
  var empList = [
    { name: "FullTime", value: new FullTime() },
    { name: "PartTime", value: new PartTime()},
    { name: "Temporary", value: new Temporary() },
    { name: "Contractor", value: new Contractor()},
  ];
  //add fields
  empList.forEach(function(emp){
    emps[emp.name]=emp.value;
  });
};

//Lets use it
var obj=new EmployeeFactory();
console.log(obj.FullTime.hourly);
console.log(obj.PartTime.hourly);