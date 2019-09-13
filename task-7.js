'use strict';


// Напиши скрипт управления личным кабинетом интернет банка. 
// Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};


const tran = {
  id: 'id-1',
  type: Transaction.DEPOSIT,
  amount: 20,

}

const tran2 = {
  id: 'id-2',
  type: Transaction.WITHDRAW,
  amount: 10,

}

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {

  balance: 20,

  transactions: [{
      id: 1,
      type: Transaction.DEPOSIT,
      amount: 20,

    },

    {
      id: 2,
      type: Transaction.WITHDRAW,
      amount: 10,

    }
  ],

  /*
   * Метод отвечающий за добавление суммы к балансу
   * Создает объект транзакции и вызывает addTransaction
   */
  deposit(amount) {

    let transaction = {
      id: Math.random(),
      type: Transaction.DEPOSIT,
      amount,
    };

    // console.log(transaction);
    this.addTransaction(transaction);

    this.balance += amount;
    // console.log(this.balance);
    return transaction;
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Создает объект транзакции и вызывает addTransaction
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {

    let transaction = {
      id: Math.random(),
      type: Transaction.WITHDRAW,
      amount,
    };
    this.addTransaction(transaction);



    if (amount < this.balance) {
      this.balance -= amount;
      return transaction;
    } else {
      console.log(`Невозможно снять сумму ${amount}, так как на счету недостаточно средств!`);
    }


    //console.log(this.balance);


  },

  /*
   * Метод добавляющий транзацию в свойство transactions
   * Принимает объект трназкции
   */
  addTransaction(transaction) {

    this.transactions.push(transaction);
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {

    //console.table(this.transactions);

    for (const transaction of this.transactions) {

      let desiredTransaction = transaction;


      if (transaction.id === id) {
        // console.log(id);
        return desiredTransaction;
      }

    }

  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {

    let total = 0;

    for (const transaction of this.transactions) {

      let desiredTransaction = transaction;


      if (transaction.type === type) {
        // console.log(id);
        total += 1;

      }

    }
    return total;

  },
};

console.log(account.withdraw(10));
// console.log(account.deposit(100));
// console.log(account.balance);
// console.log(account.transactions);