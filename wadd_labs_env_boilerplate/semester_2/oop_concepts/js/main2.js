//abstraction

function Profile() {
    throw new Error("Can not create an instance of abstract class");

}

Profile.prototype.ability = function(){
    return `${this.name} is mostly prefferd for ${this.weight} weight works`
}

function  Person(name , weight){
    this.name = name;
    this.weight = weight;
}

Object.setPrototypeOf(Person.prototype , Profile.prototype)

const pOne = new Person("Sandeep", 45);
console.log(pOne);

console.log(pOne.ability());

//polymorphism

function GrandPaa(name) {
    this.name = name
}
GrandPaa.prototype.method = function () {
        return "this has come from grand paa "
    }


function Father(name){
    this.name = name
}

Father.prototype.method = function () {
    return "this has come from father"
}

Object.setPrototypeOf(Father.prototype, GrandPaa.prototype);

function Mother(name) {
    this.name
}
Mother.prototype.method = function () {
    return "this has come from mother "
}

Object.setPrototypeOf(Mother.prototype, GrandPaa.prototype);

function Brother(name) {
    this.name =name
}

Object.setPrototypeOf(Brother.prototype, GrandPaa.prototype);

const InstanceOne = new Father("fat");
const InstanceTwo = new Mother("mot");
const InstanceThree = new Brother("bro");

console.log(InstanceOne.method());
console.log(InstanceTwo.method());
console.log(InstanceThree.method());

//encapsulation

//first one is without encapsulation that is why commented out

// function Student(english, computer, science, math) {
//     this.english =english;
//     this.computer =computer;
//     this.science = science;
//     this.math = math;
//     this.total = function () {
//         return english + computer + science + math;
//     }

// }

// const notMe = new Student(33,17,65,0);
// const me = new Student(200,500,100,700); 

// console.log(notMe); //has total function
// console.log(me); //has total function

// console.log(me.total)
// console.log(notMe.total());

//but to keep it dry we put methods in prototype

function Student(english, computer, science, math) {
    this.english =english;
    this.computer =computer;
    this.science = science;
    this.math = math;
}

Student.prototype.total = function () {
    return this.english + this.computer + this.science + this.math;
}

const notMe = new Student(33,17,65,0);
const me = new Student(200,500,100,700); 

console.log(notMe); //has no total function in object
console.log(me); //has no total function in object

console.log(me.total)
console.log(notMe.total());

//abstrction with class

class Profil {
    constructor(){
        if(!(this instanceof Perso)){
            throw new Error("Can not create an instance of abstract class");
        }
    }
    abilit(){
    return `${this.name} is mostly prefferd for ${this.weight} weight works`;
    }  
}

class Perso extends Profil{
    constructor(name , weight){
        super();
        this.name = name;
        this.weight = weight;
    }
}
const p_One = new Perso("Sandeep", 45);

console.log(p_One);

console.log(p_One.abilit());