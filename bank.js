var Bank = function() {
  this.accounts = [];
}

Bank.prototype.addAccount = function (account) {
  this.accounts.push(account);
}

Bank.prototype.accountByName = function(name){
  let result = null;
  this.accounts.forEach(function(accountObject){
    if(accountObject.name === name){
    result = accountObject;
  }
  })
  return result;
}

Bank.prototype.largestAccount = function(){
  let largestAccount = this.accounts[0];
  this.accounts.forEach(function(accountObject){
    // If the current account's value is bigger that result's value
    // then update result to be the current account
    if(accountObject.value > largestAccount.value){
      largestAccount = accountObject;
    }
  })
  return largestAccount;
}

module.exports = Bank;
