let a=1
console.log(a)
console.log(a+1)
console.log(a+2)

for(i=1;i<=10;i++){
    console.log(i)
}

let obj={
    name:"vivek",
    role:"programmer",
    company:"code with harry"
}
for(key in obj){
    console.log(obj[key])
}

for (const c of "harry") {
    console.log(c)
}


let s=0;

do{
    console.log(s)
    s++
}while(s<6)