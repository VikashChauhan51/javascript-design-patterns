/*The Command pattern aims to encapsulate method invocation, requests or operations into a single object 
and gives us the ability to both parameterize and pass method calls around that can be executed at our
discretion. In addition, it enables us to decouple objects invoking the action from the objects which 
implement them, giving us a greater degree of overall flexibility in swapping out concrete classes (objects).
 */
var Alarm = function (name) {
  this.name = name;
  this.status = false;
  this.enable = function () {
    this.status = true;
  };
  this.disable = function () {
    this.status = false;
  };
};

var EnableAlarm = function (alarm) {
  this.alarm = alarm;
};
EnableAlarm.prototype.execute = function () {
  this.alarm.enable();
};

var DisableAlarm = function (alarm) {
  this.alarm = alarm;
};
DisableAlarm.prototype.execute = function () {
  this.alarm.disable();
};

//set alarm command
var myAlarm = new Alarm("demo");
var enbl = new EnableAlarm(myAlarm);
var dsbl = new DisableAlarm(myAlarm);
//call these commands

var Button = function (name, command) {
  this.name = name;
  this.command = command;
};
Button.prototype.click = function () {
  console.log(this.name);
  this.command.execute();
};

var enableBtn = new Button("enable", enbl);
var disableBtn = new Button("disable", dsbl);
enableBtn.click();
console.log(myAlarm.name, myAlarm.status);
disableBtn.click();
console.log(myAlarm.name, myAlarm.status);
