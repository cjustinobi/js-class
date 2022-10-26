
class Account {

  constructor(name) {
    this.owner = name
    this.balance = 0
  }

  getBalance() {
    return this.balance
  }

  deposit(amount) {
    this.balance += amount
  }

  withdraw(amount) {
    if (this.getBalance() < amount) return console.log('Insufficient fund')
    this.balance -= amount
  }
}

class ZenithAccount extends Account {
  constructor(name, awuf) {
    super(name);
    this.deposit(awuf)
  }
}

const justinAccount = new ZenithAccount('Justin', 2000)


