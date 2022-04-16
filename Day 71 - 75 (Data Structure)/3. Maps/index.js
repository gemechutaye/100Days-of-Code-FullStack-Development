const items = new Map([
    [1, { name: 'John' }],
    [2, { name: 'Mary' }]
  ]);
  
  items.set(4, { name: 'Alan' });
  items.set(2, { name: 'Jeff' });
  
  items.size;                      // 3
  items.has(4);                    // true
  items.get(2);                    // { name: 'Jeff' }
  
  items.delete(2);
  items.size;                      // 2
  
  [...items.keys()];               // [1, 4]
  [...items.values()];             // [{ name: 'John' }, { name: 'Alan' }]
  
  items.clear();
  items.size;                      // 0