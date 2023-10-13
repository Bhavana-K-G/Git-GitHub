//create an object
var emp={id:101,name:'rahul'}
console.log(emp)

//read an object
console.log(emp)
console.log(emp.id)    //with property
console.log(emp.name)  //with property
//console.log(emp,email) //undefined

//update an object
emp.name='rahul gandhi'
emp.loc='bengaluru'
console.log(emp)
console.log(emp.id)
console.log(emp.name)
console.log(emp.loc)

//delete an object
var e={id:101,name:'rahul'}
console.log(e)
delete (e.id)
console.log(e)

//function in an object
var employee={
    id:102,
    name:'ramya',
    details:function(){
        return'rahul@pm.com'
    }
}
console.log(employee)
console.log(employee.id)
console.log(employee.name)
console.log(employee.details())
//console.log(employee.loc)//undefined
//console.log(employee.getsal())//error

//for in loop for an object
let products ={
    id:101,
    name:'iphone 5s',
    price:300,
    color:'gray',
    avail:false
}
//only key as an output
for(prop in products){
    console.log(prop)
}
//for both key and value output
for(key in products){
    console.log(key,":",products[key])
}