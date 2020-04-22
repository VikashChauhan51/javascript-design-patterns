/*Facade Pattern is provied semplified interface (wrapper) over a complicated object.
Facades are a structural pattern which can often be seen in JavaScript libraries like jQuery where,
 although an implementation may support methods with a wide range of behaviors, only a "facade" or
  limited abstraction of these methods is presented to the public for use. */

  //module seems complicated object
var module = (function () {
  var _private = {
    i: 5,
    get: function () {
      console.log("current value:" + this.i);
    },
    set: function (val) {
      this.i = val;
    },
    run: function () {
      console.log("running");
    },
    jump: function () {
      console.log("jumping");
    },
  };

  return {
    facade: function (args) { // performing multiple complex action with a one function.
      _private.set(args.val);
      _private.get();
      if (args.run) {
        _private.run();
      }
    },
  };
})();

// Outputs: "current value: 10" and "running"
module.facade({ run: true, val: 10 });
