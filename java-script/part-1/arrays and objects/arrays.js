//creating an array
let a=[]
console.log(a)

let b=[10,20.5,"rahul",false,[],undefined]
console.log(b)

//reading an array
let enames=["rahul","sonia","priyanka"]
console.log(a)
console.log(b)
console.log(enames)

//for loop in arrays
let ename=["rahul","sonia","priyanka","modi"]
for(let i=0; i<=3; i=i+1){
    console.log(ename[i])
}

//while loop in arrays
let e=["rahul","sonia","priyanka","modi"]
let i=0;
while(i<=3){
    console.log(e[i])
    i=i+1
}

//for of loop in arrays
let users=["rahul","sonia","priyanka","modi"]
for(user of users){
    console.log(user)
}

let ids=[101,102,103,104,105]
for(id of ids){
    console.log(id)
}