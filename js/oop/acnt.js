var account_details={
    1000:{account_number:1000,balance:3000,password:"userone",transactions:[]},
    1001:{account_number:1001,balance:2000,password:"usertwo",transactions:[]},
    1002:{account_number:1002,balance:4000,password:"userthree",transactions:[]},
    1003:{account_number:1003,balance:5000,password:"userfour",transactions:[]}
}

// q1 create a function validateAccountNumber(acno) if acno exist return true else return false
function validate(acno){
    return acno in account_details?true:false
}
console.log(validate(1003));
// q2 create a function authenticate (acno,password) if given credential are correct 
function authentication(acno,password){
    if (validate(acno)){
        let pwd=account_details[acno].password
        if(pwd==password){
            return "login success"
        }
        else{
            return"invalid password"
        }
    }
    else{
        return "invalid user"
    }
}
console.log(authentication(1004,"userone"));
// return access granted else return permission denied