const obj={
    firstName:'alif',
    lastName:'khan',
    salary:1000,
    getFullName: function(){   //method
        console.log(this.firstName,this.lastName);
    },
    afterPaidBill:function(amount,tax,tips){ //method
        this.salary=this.salary-amount-tax-tips;
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

obj.afterPaidBill.call(person01,200,50,10);
console.log(person01.salary);

obj.afterPaidBill.apply(person02,[300,100,80]);
console.log(person02.salary);