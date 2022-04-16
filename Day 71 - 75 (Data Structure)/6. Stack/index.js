class Stack {
    constructor() {
      this.items = [];
    }
  
    push(item) {
      this.items.unshift(item);
    }
  
    pop(item) {
      return this.items.shift();
    }
  
    peek(item) {
      return this.items[0];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }