class bank{

    createAccnt(acno,pName,pan,branch,phone,bal){
        this.accntNumber=acno;
        this.personName=pName;
        this.pan=pan;
        this.branch=branch;
        this.phone=phone;
        this.bal=bal;
    }
    withdraw(amount){
        if(amount>this.bal){
            console.log(`transactn canceld on your acnt ${this.accntNumber}`);
        }
        else{
            this.bal-=amount
            console.log(`your account ${this.accntNumber} has debited with amnt ${this.amount} your crnt balance is ${this.bal}`);
        }
    }
    deposit(amount){
        this.bal+=amount
        console.log(`your account ${this.accntNumber} has credited with amnt ${this.amount} your crnt balance is ${this.bal}`);

    }
    balanceEnquiry(){
        console.log(`your val balance =${this.bal}`);
    }
}

var acc=new bank();
acc.createAccnt(1010,"anu",234,"chirakkal",4532,10000)
acc.withdraw(20000)
acc.deposit(1000)
acc.withdraw(5000)