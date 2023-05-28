// constuctor function//
//method//
function Person (){
    this.firstName = '';
    this.lastName = '';
    this.middleName = function (name){
        console.log(`hello ${name} my name is ${this.firstName}`)
    };
}
const rzn = new Person();
rzn.firstName = 'java';
rzn.middleName ('jamal')
const stn = new Person();
stn.firstName = 'ruby';
stn.middleName ('dewi');


console.log(rzn);
console.log(stn);

//method constuctor funtion//
// function SayHello (){
//     this.name = '';
//     this.age = '';
//     this.gender = function(name){
//         console.info(`hello${name}my age is ${this.age}`)
//     }
// }
// const jamal = new SayHello();
// jamal.gender('laki-laki');
// jamal.age ='20';

// const dewi = new SayHello();
// dewi.gender('perempuan');
// dewi.age = '18';


// console.log(jamal)
// console.log(dewi)