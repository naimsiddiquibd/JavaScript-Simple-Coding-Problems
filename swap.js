// Swap two varriable
var frist = 5;
var second = 7;
console.log(frist, second);
// first approach
var temporary = frist;
frist = second;
second = temporary;
console.log(frist, second);

// desreucturing
// [first, second] = [second, first];
// console.log(frist, second);