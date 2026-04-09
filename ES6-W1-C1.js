// console.log('I am present .');

// DECLARER UNE VARIABLE
const x = "global ";
function test() {
  const x = "local";
  console.log(x);
}
test();
console.log(x);
// destructuration
const user = {
    name : 'stela',
    age : 25, 
    city : 'yaounde'
}
const {name , age , city} = user ;
const {city : location} = user ;


// pour juste recuperer l'age et le nom dans cet objet
console.log(user.age);
console.log(user.name);
// declarer avec let
let score = 0;
for(let i  = 0 ; i <= 3 ; i++){
    score +=i;
    console.log(score);
}
function greet (name){
    return "hello ," + name;
}
console.log(greet('ange'))
const num = [1 , 2 , 3];
const doubled = num.map(
    function(n){
        return n*2
    }
)
// DESCTRUCTURATION
// const colors = ['red','green']
// const [first , second] = colors
 const array = [1 , 2 , ... 500]
 const [first , second , third , ...rest] = array