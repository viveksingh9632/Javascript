//returns the length (size)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
console.log(size)

//(comma separated) array values.
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
let app=fruits1.toString()
console.log(app)



const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
let k=fruits2.join("*")
console.log(k)

const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits3.pop())



//The push() method adds a new element to an array (at the end):diret
const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
fruits4.push("Kiwi");
console.log(fruits4)


//The shift() method removes the first array element and "shifts" all other elements to a lower index.

const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
fruits5.shift();
console.log(fruits5)



//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:


const fruits6 = ["Banana", "Orange", "Apple", "Mango"];
fruits6.unshift("Lemon");
console.log(fruits6)

const fruits7 = ["Banana", "Orange", "Apple", "Mango"];
delete fruits7[0];
console.log(fruits7)


let p=["vivek","vikash","nitish"]
delete p[2];
console.log(p)


let a=[1,52,66,5,9,88,2]
let s=a.sort((a,b)=>a>b?1:-1)
console.log(s)




