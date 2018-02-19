var Stack = function() {
  this.length = 0;
  this.store = [];

  this.push = function(element) {
    this.store.push(element);
    this.length++;
    return this;
  }

  this.pop = function() {
    if (this.length === 0) {
      return 'The stack is empty';
    }

    var removed = this.store.pop();
    this.length--;
    return removed;
  }

  this.peek = function() {
    return this.store[this.length - 1];
  }
}

var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack);
console.log(stack.peek());
stack.pop();
console.log(stack);
console.log(stack.peek());

export const hasErrors = (errorState, formId) => {
  console.log(errorState, formId);
  let hasError = false;
  let formEl = null;

  // Check if we have the right form in the document
  if (formId && document.forms[formId]) {
    formEl = document.forms[formId];
  }

  Object.keys(errorState).forEach((key) => {
    console.log(key);
    // skip key if the property is from prototype
    if (typeof key !== 'string' || !Object.prototype.hasOwnProperty.call(errorState, key) ||
      key === 'non_field_errors') {
      return;
    }

    // skip if form given and key not in form
    if (formEl && formEl.querySelectorAll(`[name=${key}]`).length === 0) {
      return;
    }

    if (errorState && typeof errorState[key] === 'object' && errorState[key].length > 0) {
      hasError = true;
    }
  });

  return hasError;
};
