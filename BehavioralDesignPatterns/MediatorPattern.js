/*A Mediator is an object that coordinates interactions (logic and behavior) between multiple objects.
 It makes decisions on when to call which objects, based on the actions (or inaction) of other objects and input.
 */
var Mediator = (function () {
   var channels = {};
  var suscribe = function (channel, context, func) {
    if (!Mediator.channels[channel]) {
        Mediator.channels[channel] = [];
    }
    Mediator.channels[channel].push({ context: context, func: func });
  };
  var unSuscribe = function (channel, context, func) {
    if (Mediator.channels[channel]) {
      var obj = { context: context, func: func };
      var index = 0;
      var found = false;
      while (index < Mediator.channels[channel].length) {
        if (Mediator.channels[channel][index].context === obj.context) {
          found = true;
          break;
        }
        index++;
      }
      if (found) {
        Mediator.channels[channel].splice(index, 1);
        return found;
      }
    }
    return false;
  };
  var publish = function (channel) {
    if (!Mediator.channels[channel]) {
      return false;
    }
    var args = Array.prototype.slice.call(arguments, 1);
    for (var i = 0; i < Mediator.channels[channel].length; i++) {
      var sub = Mediator.channels[channel][i];
      sub.func.apply(sub.context, args);
    }
  };
  return {
    channels:channels,
    suscribe: suscribe,
    unSuscribe: unSuscribe,
    publish: publish,
  };
})();

//object
var Task = function (name) {
  // instance related isolated fields
  this.name = name;
  this.completed = false;
};

//Task shared members (only signle copy of 'setCompleted' function with all objects of Task)
Task.prototype.setCompleted = function () {
  console.log(this.name + "has been completed");
  this.completed = true;
};

// Observer
var loggingServer = function () {
  var message = "logging";
  this.update = function (task) {
    console.log(message + " " + task.name + " and status " + task.completed);
  };
};
var auditingServer = function () {
  var message = "auditing";
  this.update = function (task) {
    console.log(message + " " + task.name + " and status " + task.completed);
  };
};

var myTask = new Task("Mediator task");
var log = new loggingServer();
var aud = new auditingServer();
//Suscribe
Mediator.suscribe("task", log, log.update);
Mediator.suscribe("task", aud, aud.update);

//override complete
myTask.setCompleted = function () {
  Task.prototype.setCompleted.call(this);
  Mediator.publish("task", this);
};
//call complete function
myTask.setCompleted();
//unsuscribe
console.log(Mediator.unSuscribe("task", aud, aud.update));
//call complete function
myTask.setCompleted();
