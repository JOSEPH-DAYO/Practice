// Classes: Person Account

class PersonAccount {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
    this.incomes = new Set()
    this.expenses = new Set()
  }

  addIncome(amount, description) {
    this.incomes.add({ amount, description })
  }

  addExpense(amount, description) {
    this.expenses.add({ amount, description })
  }

  totalIncome() {
    return [...this.incomes].reduce(
      (total, income) => total + income.amount,
      0
    )
  }

  totalExpense() {
    return [...this.expenses].reduce(
      (total, expense) => total + expense.amount,
      0
    )
  }

  accountBalance() {
    return this.totalIncome() - this.totalExpense()
  }

  accountInfo() {
    return `${this.firstName} ${this.lastName}'s balance is ${this.accountBalance()}`
  }
}

const account = new PersonAccount('John', 'Doe')

account.addIncome(3000, 'Salary')
account.addIncome(500, 'Freelance work')
account.addExpense(1200, 'Rent')
account.addExpense(300, 'Food')

console.log(account.totalIncome())     // 3500
console.log(account.totalExpense())    // 1500
console.log(account.accountBalance())  // 2000
console.log(account.accountInfo())     // John's balance is 2000