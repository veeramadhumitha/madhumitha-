let numbers=[3,9,8,5,24]
let arr=numbers.map(a=>a+1)
let res=arr.filter(num=>num%2===0)
let sum=res.reduce((n,cur)=>n+cur,0)
console.log(sum)

let b=[1,3,5,7,12,20]
const [s1,...s2]=b;
console.log(s2)
let c=[1,...b,12,20];
console.log(c)

const a1=[1,4,7,8]
const a2=[2,5,6,9]
const spread=[...a1,...a2]
console.log(spread)

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json()) // parse JSON
  .then(data => {
    data.map(user => console.log(user.name));
  })
  .catch(err => console.log(err));


 let obj={user:"siva",age:"19",course:"CSE"}
 console.log(obj.age)

async function fetchUserNames() {
 try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
   const data = await response.json();
    data.map(user => console.log(user.name));

 } catch (err) {
    console.log("Error:", err);
  }
}

fetchUserNames();