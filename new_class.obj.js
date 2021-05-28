
class Person{
    constructor(firstName,lastName,salary){
        this.firstName=firstName;
        this.lastName=lastName;
        this.salary=salary;
    }
}

const personOne=new Person('XXX','AAA',20000);
console.log(personOne);

const personTwo=new Person('BBB','YYY',40000);
console.log(personTwo);

//Old Style Before Es6

function OldPerson(f,l,s){
    this.f=f;
    this.l=l;
    this.s=s;
}

const oldPersonOne=new OldPerson('asif','VVVV',90000);
console.log(oldPersonOne);