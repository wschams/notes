var account = {
    balance: 0
};
function addInterest(interest){
    this.balance += interest;
}
addInterest.call(account, 10);
console.log(account.balance);