// Remplacons le var par le let car ces objets ne changent pas
const student1 = {
  name: "Marie",
  age: 22,
  city: "yaounde",
  skills: ["HTML", "CSS"],
};
const student2 = {
  name: "Paul",
  age: 25,
  city: "Douala",
  skills: ["Python", "SQL"],
};
// Remplacons chaque dclaration de fonction par des fonctions flechées
// avant
function getCity(student) {
  return student.city;
}
// Apres
const getCity = (student) => {
  return student.city;
};
// avant
function buildProfle(student, Extrakills) {
  var name = student.name;
  var age = student.age;
  var allskills = student.skills.concat(Extrakills);
  return name + "( " + age + " ) de " + getCity(student);
}
// apres
const buildProfle = (student, Extrakills) => {
  const name = student.name;
  const age = student.age;
  const allskills = student.skills.concat(Extrakills);
  return name + "( " + age + " ) de " + getCity(student);
};
// avant 
function mergeStudents(S1,S2){
    return {name : S1.name + '&' + S2.name , city :'cameroun'};
}
apres 
const mergeStudents = (S1, S2) => {
    return {name : S1.name + '&' + S2.name , city :'cameroun'};
}
// DESTRUCTURATION
// avant

const getCity = (student) => {
  return student.city;
};
// j'ai utilisé une fonction flechée pour simplifier la syntaxe
// apres
const getCity = ({city}) =>city;

// DESTRUCTURATION DANS buildProfile
// avant
const buildProfle = (student, Extrakills) => {
  const name = student.name;
  const age = student.age;
  const allskills = student.skills.concat(Extrakills);
 return name + '(' + age + ') de ' + getCity(student) + '| Comp : ' + allskills.join(',')
};
// apres
// destructuration pour recuperer l'age et name ;
// operateur spread pour fusioner les templates litterales pour construire la chaine 
const {name , age  } = student;
// fusion des competences
// avec l'operateur (...spread)
 const allskills =[...student.skills,...Extrakills];
// LITTERAL DE GABARIT
// avant
const buildProfle = (student, Extrakills) => {
  const name = student.name;
  const age = student.age;
  const allskills = student.skills.concat(Extrakills);
  
};
// apres
return `$name ` ($age ) de ${getCity(student)} | Comp : $ {allskills.join (',') }`;

// defi bonus
const collectNames = (...students) =>students.map(student =>student.name);