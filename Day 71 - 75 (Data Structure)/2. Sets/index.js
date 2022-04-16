const nums = new Set([1, 2, 3]);

nums.add(4);
nums.add(1);
nums.add(5);
nums.add(4);

nums.size;                       // 5
nums.has(4);                     // true

nums.delete(4);
nums.has(4);                     // false

[...nums];                       // [1, 2, 3, 5]

nums.clear();
nums.size;                       // 0