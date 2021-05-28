const obj={
    firstName:'alif',
    lastName:'khan',
    salary:1000,
    getFullName: function(){   //method
        console.log(this.firstName,this.lastName);
    },
    afterPaidBill:function(amount){ //method
        this.salary=this.salary-amount;
        return this.salary;
    }

}

const person01={
    firstName:'xxx',
    lastName:'bbb',
    salary:2000
}

const person02={
    firstName:'AAA',
    lastName:'ccc',
    salary:3000
}

const person01ChargeBill=obj.afterPaidBill.bind(person01); //call another obj method in another obj
person01ChargeBill(200);
console.log(person01.salary);

const person02ChargeBill=obj.afterPaidBill.bind(person02);
person02ChargeBill(500);
console.log(person02.salary);

