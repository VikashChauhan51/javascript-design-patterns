/*The Observer is a design pattern where an object (known as a subject) maintains 
a list of objects depending on it (observers), automatically notifying them of any changes to state.

When a subject needs to notify observers about something interesting happening,
it broadcasts a notification to the observers (which can include specific data
related to the topic of the notification).

When we no longer wish for a particular observer to be notified of changes by the subject they are registered 
with, the subject can remove them from the list of observers.

We can now expand on what we've learned to implement the Observer pattern with the following components:

Subject: maintains a list of observers, facilitates adding or removing observers
Observer: provides an update interface for objects that need to be notified of a Subject's changes of state
ConcreteSubject: broadcasts notifications to observers on changes of state, stores the state of ConcreteObservers
ConcreteObserver: stores a reference to the ConcreteSubject, implements an update interface for the Observer to ensure state is consistent with the Subject's
*/
 
function ObserverList(){
    this.observerList = [];
  }
   
  ObserverList.prototype.add = function( obj ){
    return this.observerList.push( obj );
  };
   
  ObserverList.prototype.count = function(){
    return this.observerList.length;
  };
   
  ObserverList.prototype.get = function( index ){
    if( index > -1 && index < this.observerList.length ){
      return this.observerList[ index ];
    }
  };
   
  ObserverList.prototype.indexOf = function( obj, startIndex ){
    var i = startIndex;
   
    while( i < this.observerList.length ){
      if( this.observerList[i] === obj ){
        return i;
      }
      i++;
    }
   
    return -1;
  };
   
  ObserverList.prototype.removeAt = function( index ){
    this.observerList.splice( index, 1 );
  };
  //Subject
  function Subject(){
    this.observers = new ObserverList();
  }
   
  Subject.prototype.addObserver = function( observer ){
    this.observers.add( observer );
  };
   
  Subject.prototype.removeObserver = function( observer ){
    this.observers.removeAt( this.observers.indexOf( observer, 0 ) );
  };
   
  Subject.prototype.notify = function( context ){
    var observerCount = this.observers.count();
    for(var i=0; i < observerCount; i++){
      this.observers.get(i).update( context );
    }
  };

  // The Observer
function Observer(name){
    this.name=name;
    this.update = function(context){
      console.log("Observer:"+this.name,context);
    };
  };

  //Lets create demo
  //ConcreteSubject (you can extend this subject function with other function to make a new concrete Subject)
  var mySubject=new Subject();
  //ConcreteObserver (you can extend this Observer function with other function to make a new concrete Observer)
  var obj1=new Observer("obj1");
  var obj3=new Observer("obj3");
  var obj2=new Observer("obj2");

  mySubject.addObserver(obj1);
  mySubject.addObserver(obj2);
  mySubject.addObserver(obj3);
  //Lets notify
  mySubject.notify("hello");
  mySubject.removeObserver(obj3);
  mySubject.notify("bye");

  //Lets try with extended object

  // Extend an object with an extension
function extend( obj, extension ){
    for ( var key in extension ){
      obj[key] = extension[key];
    }
  };

  var Task=function (name){
      this.name;
      this.completed=false;
  }
var myTask=new Task("demo task");
  // Extend the checkbox with the Observer class
  extend( myTask, new Observer(myTask.name) );
 
  // Override with custom update behaviour
  myTask.update = function( value ){
    this.completed = value;
  };
  mySubject.addObserver(myTask);
  mySubject.notify(true);
  console.log("myTask",myTask.completed);