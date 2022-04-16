class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(item) {
      this.items.push(item);
    }
  
    dequeue(item) {
      return this.items.shift();
    }
  
    peek(item) {
      return this.items[0];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }