

var str="This is a string"
console.log(str)

var position=str.indexOf("is")
console.log(position)

position=str.lastIndexOf("is")
console.log(position)



//var substr=str.slice(1,5)

var substr=str.substring(1,3)
console.log(substr)


var substr1=str.substr(1,3)
console.log(substr1)



var replaced=str.replace("string","vivek")
console.log(replaced)


console.log(str.toLocaleUpperCase())
console.log(str.toLowerCase())


var concat=str.concat("viveh")
console.log(concat)


var w="   this is vivek       "
var m=w.trim()
console.log(w)

let age=8
if (age>18) {
    console.log("you can drink water")
}
else if(age==2){
    console.log("Age is 2")
}
else if(age==8){
console.log("milkman")
}
else{
    console.log("you can drink cold drink")
}




for(i=0;i<3;i++){
    console.log(i)
}


let friend =["vivek","rohit","shubh","anjali"]
//for(i=0;i<friend.length;i++){
    //console.log(friend[i])
//}


friend.forEach(function f(element){
    console.log(element)
}
)


let person={
name:"vivek",
class:"12th",
Rolno:110056,
}

for(element in person){
    console.log(element+" "+person[element])
}






