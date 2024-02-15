function name() {
    console.log("v");
    console.log("i");
    console.log("v");
    console.log("e");
    console.log("k");


}
name();


/*function addtwonumber(a,b) {
    console.log(a+b);
    
    
}
addtwonumber(5,"1")

*/


function addtwonumber(a,b) {
    
    //let result=a+b
    //return result
     
    return a+b
    
    
}
  const  result= addtwonumber(2,3)
  console.log("Result:",result)






  /*function name(name,goodday) {
    console.log("Good "+goodday+" "+name+"  .welcome back")
  }
name("vivek","sunday")
*/




function ram(name) {
    console.log("vivek "+name+" ranghar")
}
ram("singh")


function garhwali(vivek,garhwali) {
    console.log(" i am "+vivek+" singh "+garhwali+" yes")
}
garhwali()



function convertTo(temp,unit) {
            let converttedvalue;

    if(unit==='c'){
    converttedvalue=(temp-32)*5/9
    }else{
        converttedvalue=(temp*9/5)+32
}
return converttedvalue;
}

let tocelcius=convertTo(50,'c')
console.log(tocelcius);

console.log(convertTo(30,'F'))










