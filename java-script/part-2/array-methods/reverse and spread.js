//if the values are repeated, giving o/p as an single value from an array
let ids=[101,102,101,102,102,103]
let new_Ids=[]
for( let i=0;i<=ids.length-1;i++){
    if(new_Ids.indexOf(ids[i]) == -1){
            new_Ids.push(ids[i])
    }
}
console.log(new_Ids)

//another example
var enaemes=['rahul','sonia','priyanka','modi','rahul','sonia','priyanka','modi','rahul','sonia','priyanka','modi','rahul','sonia','priyanka','modi']
var new_Names=[]
for( let i=0;i<=enaemes.length-1;i++){
    if(new_Names.indexOf(enaemes[i]) == -1){
            new_Names.push(enaemes[i])
    }
}
console.log(new_Names)


//using spread method
var enaemes=['rahul','sonia','priyanka','modi','rahul','sonia','priyanka','modi','rahul','sonia','priyanka','modi','rahul','sonia','priyanka','modi']
console.log(new Set([...enaemes]))