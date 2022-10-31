export class BankAccount {
  private _balance = 5000;
  private _log: Transaction[] = [];
  private _lastTransaction: Transaction | undefined;
  get balance() {
    return this._balance;
  }

  deposit(amount: number) {
    this._balance += amount;
    this.addToLog(amount, 'Deposit');
  }
  withdraw(amount: number) {
    this._balance -= amount;
    this.addToLog(amount, 'Withdrawal');
  }

  getLastTransaction() {
    return this._lastTransaction;
  }

  private addToLog(amount: number, type: TransactionTypes) {
    const tx: Transaction = {
      date: new Date().toISOString(),
      type,
      amount,
    };

    this._log.push(tx);
    this._lastTransaction = tx;
  }
}

type Transaction = {
  date: string;
  amount: number;
  type: TransactionTypes;
};
type TransactionTypes = 'Deposit' | 'Withdrawal';
