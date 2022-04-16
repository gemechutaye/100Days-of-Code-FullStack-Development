const nums = [1, 2, 3];
const strs = Array.from('est');

nums.push(6);
nums.push(4, 9);
strs.unshift('t');

nums.length;                     // 6
nums[nums.length - 1];           // 9
strs[0];                         // 't'
strs[2];                         // 's'

nums.slice(1, 3);                // [2, 3]
nums.map(n => n * 2);            // [2, 4, 6, 12, 8, 18]
nums.filter(n => n % 2 === 0);   // [2, 6, 4]
nums.reduce((a, n) => a + n, 0); // 25

strs.reverse();                  // ['t', 's', 'e', 't']
strs.join('');                   // 'test'