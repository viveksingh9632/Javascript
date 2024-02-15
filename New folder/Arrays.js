//can store single
//can be used store collection of value


let persons=["john","mark","mary"]
console.log(persons);


let years=new Array(1999,1997,2007,1995)
console.log(years)



console.log(persons[1])
console.log(persons[0])
console.log(persons[2])



persons[3]="stev"

console.log(persons[3])



console.log(persons.length)





let arry=[];
arry[50]='test'
console.log(arry.length)


let a=[1,2,3,4,5,6]
let b=a.sort((a,b)=>a>b?-1:1)
console.log(b)



let c=["a","b","c","d","e"]
//let d=c.toString()
//console.log(d)




//push method adds an element at the end of the array
c.push("v")
console.log(c)




let t=c.pop()
console.log(t)

c.unshift("a")
console.log(c)







let vivek=()=>{
    let x="vivek heu"
    console.log(x)
}
vivek()









