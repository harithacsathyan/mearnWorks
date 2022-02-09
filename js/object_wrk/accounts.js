var accounts = [
    {
      acno: 1000, ac_type: "savings", balance: 5000, transactions: [
        { to: 1001, amount: 500, note: "ebill", method: "g-pay" },
        { to: 1002, amount: 600, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
      ]
    },
    {
      acno: 1001, ac_type: "savings", balance: 6000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1002, ac_type: "current", balance: 8000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1001, amount: 5000, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1003, ac_type: "current", balance: 16000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1001, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
  
  ]

  //  q1  total number accounts
  console.log("total number");
  console.log(accounts.length);

   
//q2  print all account numbers whose ac-type savings
console.log("ac-type savings");
accounts.filter(ac=>ac.ac_type=="savings").forEach(ac=>console.log(ac.acno))

//q3 print balance of acno=1000
console.log("balance of acno=1000");
console.log(accounts.find(ac=>ac.acno==1000).balance);



//q4 print all g-pay transaction details
console.log("all g-pay transaction details");
var transactn=accounts.map(ac=>ac.transactions).flat().filter(ac=>ac.method=="g-pay")
console.log(transactn);

// print all transaction whos transactn amnt <500
console.log("transaction whos transactn amnt <500");
var transactn=accounts.map(ac=>ac.transactions).flat().filter(ac=>ac.amount>500)
console.log(transactn);





//q4 print credit transcation's of 1002
console.log("credit transcation's of 1002");
var transactn=accounts.map(ac=>ac.transactions).flat().filter(ac=>ac.to==1002)
console.log(transactn);




//q5 print highest balance account details
console.log("highest balance account details");
var highest=accounts.reduce((t1,t2)=>t1.balance>t2.balance?t1:t2)
console.log(highest);



//q6 print transaction history of 1002
// console.log("transaction history of 1002");
// console.log("debit");
// console.log(accounts.find(ac=>ac.acno==1002).transactions);
// console.log("credit");
// var transactn=accounts.map(ac=>ac.transactions).flat().filter(ac=>ac.to==1002)
// console.log(transactn);
var credit=accounts.map(data=>data.transactions).flat().filter(t=>t.to==1002)
var 
var trnshstry={...c}



