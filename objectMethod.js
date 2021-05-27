
const obj={
    firstName:'alif',
    lastName:'khan',
    salary:1000,
    getFullName: function(){
        console.log(this.firstName,this.lastName);
    },
    afterPaidBill:function(amount){
        this.salary=this.salary-amount;
        return this.salary;
    }

}

console.log(obj.firstName);
obj.getFullName();
obj.afterPaidBill(200);
console.log(obj.salary);