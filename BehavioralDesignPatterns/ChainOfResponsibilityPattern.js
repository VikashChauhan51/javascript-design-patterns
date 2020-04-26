/*The Chain of Responsibility pattern provides a chain of loosely coupled objects one of which can satisfy a request.
It frees an object from knowing which object handles a request. An object only should to know that a request will be 
handled appropriately. As a result, Chain of Responsibility can simplify object interconnections. */

var Request = function(amount) {
    this.amount = amount;
    console.log("Requested: $" + amount + "\n");
};

Request.prototype = {
    get: function(bill) {
        var count = Math.floor(this.amount / bill);
        this.amount -= count * bill;
        console.log("Dispense " + count + " $" + bill + " bills");
        return this;
    }
};

//execute

var request = new Request(378);
request.get(50).get(100).get(20);