//without parameter
function add(){
    console.log("addition")
}
add()
add(1,2)

//with parameters
function add(a,b){
    console.log(a+b)
}
add(10,20)
add(100,'rahul')
add(1)
add('rahul')

//with parameters and default values
function add(a,b,c=5){
    console.log(a+b+c+1)
}
add(10,20,30)
add(10,50)

//with parameters and return 
function add(a,b){
    let c =1
    return a+b+c
}
let r1=add(1,2)
console.log(r1)
let r2=add(100,200)
console.log(r2)