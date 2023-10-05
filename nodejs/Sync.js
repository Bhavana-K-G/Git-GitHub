//sync 
const fs=require('fs')
let data=fs.readFileSync('data.txt','utf-8')
console.log(data)

//read and write sync 
const fs=require('fs')
var data=fs.readFileSync('data.txt','utf-8')
var data=fs.writeFileSync('emp.txt',data)
console.log("written successfull")