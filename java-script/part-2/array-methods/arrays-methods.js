var ids=[101,102,103,104]

//adds last end element from the array
ids.push(105)
console.log(ids);

//removes last end element from the array
ids.pop()
console.log(ids);

//adds first begining element from the array
ids.unshift(100)
console.log(ids);

//removes first begining element from the array
ids.shift()
console.log(ids);

//holding the element in the array as an o/p
var new_size=ids.push(105)
console.log(ids);
console.log(new_size);

var removed_values=ids.pop()
console.log(ids);
console.log(removed_values);

//reverse of an element from an array
var ename=['rahul','modi','priyanka','sonia']
ename.reverse()
console.log(ename);

//indexof of an element from an array
let index=ename.indexOf('modi')
console.log(index);

let index1=ename.indexOf('vishwanath')//not defined in an array
console.log(index1);