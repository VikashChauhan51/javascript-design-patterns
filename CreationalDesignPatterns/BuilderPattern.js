/*Builder pattern is a design pattern to provide a flexible solution for creating objects. 
Builder pattern separates the construction of a complex object from its representation.

Builder pattern builds a complex object using simple objects by providing a
step by step approach. It belongs to the creational patterns.
 */


 // Let consider Task is a complex object.
var Task = function(name, description, finished, dueDate) {

    this.name = name;
    this.description = description;
    this.finished = finished;
    this.dueDate = dueDate;
}

var TaskBuilder = function () {

    var self=this;
    self.name;
    self.description;
    self.isFinished = false;
    self.dueDate;

    return {
        setName: function (name) {
            self.name = name;
            return this;
        },
        setDescription: function (description) {
            self.description = description;
            return this;
        },
        setFinished: function (finished) {
            self.finished = finished;
            return this;
        },
        setDueDate: function (dueDate) {
            self.dueDate = dueDate;
            return this;
        },
        build: function () {
            return new Task(self.name, self.description, self.isFinished, self.dueDate);
        }
    };
};

var task = new TaskBuilder().setName('Task A').setDescription('finish book')
    .setDueDate(new Date(2019, 5, 12)).build();
console.log(task);