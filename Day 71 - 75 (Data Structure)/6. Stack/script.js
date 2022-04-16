const stack = new Stack();

stack.push('apples');
stack.push('oranges');
stack.push('pears');

stack.isEmpty();    // false

stack.peek();       // 'pears'

stack.pop();        // 'pears'
stack.pop();        // 'oranges'
stack.pop();        // 'apples'

stack.isEmpty();    // true