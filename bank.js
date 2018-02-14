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

module.exports = Bank;
