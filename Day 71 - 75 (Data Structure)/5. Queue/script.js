const queue = new Queue();

queue.isEmpty();    // true

queue.enqueue('A');
queue.enqueue('B');
queue.enqueue('C');
queue.enqueue('D');
queue.enqueue('E');

queue.isEmpty();    // false

queue.peek();       // 'A'

queue.dequeue();    // 'A'
queue.dequeue();    // 'B'
queue.dequeue();    // 'C'