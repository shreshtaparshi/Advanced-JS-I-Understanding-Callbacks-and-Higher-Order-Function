//question1
function createCounter() {
  let count = 0
  return {
    increment() {
      count++
      console.log("Current count:", count)
    },
    decrement() {
      count--;
      console.log("Current count:", count);
    }
  };
}
const counter = createCounter();
counter.increment(); 
counter.increment(); 
counter.decrement();  1
const counterA = createCounter();
const counterB = createCounter();

counterA.increment(); 
counterA.increment();

counterB.increment();





// Question 2
function createBankAccount() {
  let balance = 0;
  let history = [];
  return {
    deposit(amount) {
      balance += amount;
      history.push(`Deposited: ${amount}`);
      console.log("Deposited:", amount);
    },
    withdraw(amount) {
      if (amount > balance) {
        history.push(`Failed withdrawal: ${amount}`);
        console.log("Insufficient balance");
      } else {
        balance -= amount;
        history.push(`Withdrawn: ${amount}`);
        console.log("Withdrawn:", amount);
      }
    },
    checkBalance() {
      console.log("Current balance:", balance);
    },
    getHistory() {
      return [...history]; 
    }
  };
}
const account = createBankAccount();
account.deposit(500);        
account.withdraw(200);     
account.withdraw(400);     
account.checkBalance();      
console.log(account.balance); 

console.log(account.getHistory());

