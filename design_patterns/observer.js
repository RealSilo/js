function eventDispatcher(obj) {
  var list = {};

  obj.addEvent = function(type, listener) {
    if (!list[type]) {
      list[type] = [];
    }

    if (list[type].indexOf(listener) === -1) {
      list[type].push(listener);
    }
  }

  obj.removeEvent = function(type, listener) {
    var a = list[type];

    if (a) {
      var index = a.indexOf(listener);
      if (index > -1) {
        a.splice(index, 1);
      }
    }
  }

  obj.dispatchEvent = function(e) {
    var aList = list[e.type];

    if (aList) {
      if (e.target) {
        e.target = this;
      }

      for (var index in aList) {
        aList[index](e);
      }
    }
  }
}

var obj = {};
var func = function () {
  console.log('it is over2');
}
eventDispatcher(obj);
obj.addEvent('over', function() {
  console.log('it is over');
});
obj.addEvent('over', func);
obj.addEvent('over', func);
obj.addEvent('over', func);
// obj.removeEvent('over', func);

obj.dispatchEvent({type: 'over'});
