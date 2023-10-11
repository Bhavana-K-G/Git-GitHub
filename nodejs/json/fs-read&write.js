let emp={
    eid:101,
    ename:'rahul',
    esal:45000
}
//import fs from'fs'//ES6
const fs=require('fs')//ES5
fs.readFile('emp.json','utf-8',(err,data)=>{
    if(err)throw err
    let employee=json.parse(data)
    for(emp of emploees){
    console.log(emp.id)
    }
})