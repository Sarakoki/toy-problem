//Write a stack. Once you’re done,
//implement a queue using two stacks to create FIFO behavior.
//The queue should not have any storage separate from its stacks.

var Stack = function() {
  var storage = [];

  this.push = function(a) {
    return storage.push(a);
  };

  this.pop = function() {
    return storage.pop();
  };

  this.size = function() {
    return storage.length;
  };
};

var Queue = function() {
  var inbox = new Stack();
  var outbox = new Stack();

  this.enqueue = function(a) {
    inbox.push(a);
  };

  this.dequeue = function() {
    return inbox.shift();
  };

  this.size = function() {
    return inbox.size();
  };
};
