//normal program
let emp={
    id:101,
    name:'rahul'
}
let users={}
console.log(users.length)
console.log(emp.length)
console.log(emp.id)
console.log(emp.name)

//with object methods
let employee={
    id:101,
    name:'rahul',
    loc:'davanagere'
}
let keys=Object.keys(employee)
let values=Object.values(employee)
console.log(keys)
console.log(values)
console.log(keys.length)
console.log(values.length)

//ex=1
let user={}
if (Object.keys(user).length>0){
    console.log('not empty')
}
else{
    console.log('empty')
}

//ex=2
let ename={
    id:101,
    name:'rahul',
    loc:'davanagere'
}
if (Object.keys(ename).length>0){
    console.log('not empty')
}
else{
    console.log('empty')
}