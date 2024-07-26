import { Injectable, NotFoundException } from '@nestjs/common';
import { Transaction, TransactionType } from './transactions.model';
import { AccountsService } from '../accounts/accounts.service';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class TransactionsService {
  private readonly filePath = path.resolve('src/transactions/transactions.json');
  private idCounter: number;

  constructor(private readonly accountsService: AccountsService) {
    const transactions = this.readTransactions();
    this.idCounter = transactions.length > 0 ? transactions[transactions.length - 1].id + 1 : 1;
  }

  private readTransactions(): Transaction[] {
    const data = fs.readFileSync(this.filePath, 'utf8');
    return JSON.parse(data) as Transaction[];
  }

  private writeTransactions(transactions: Transaction[]): void {
    fs.writeFileSync(this.filePath, JSON.stringify(transactions, null, 2), 'utf8');
  }

  createTransaction(accountId: number, amount: number, type: TransactionType): Transaction {
    const account = this.accountsService.findById(accountId);
    if (!account) {
      throw new NotFoundException('Account not found');
    }

    const newTransaction = new Transaction(this.idCounter++, accountId, amount, type, new Date());
    const transactions = this.readTransactions();
    transactions.push(newTransaction);
    this.writeTransactions(transactions);

    if (type === TransactionType.DEBIT) {
      account.balance -= amount;
    } else {
      account.balance += amount;
    }
    this.accountsService.updateBalance(accountId, account.balance);

    return newTransaction;
  }

  findAll(): Transaction[] {
    return this.readTransactions();
  }

  updateTransaction(transactionUpdated: Transaction): Transaction {
    const listOfTransactions = this.readTransactions();
    const transactionIndex = listOfTransactions.findIndex(trans => trans.id === transactionUpdated.id);
    if (transactionIndex === -1) {
      throw new NotFoundException('Transaction not found');
    }

    const updatedTransaction: Transaction = {
      ...transactionUpdated,
    };

    listOfTransactions[transactionIndex] = updatedTransaction;
    this.writeTransactions(listOfTransactions);
    return updatedTransaction;
  }

  removeTransaction(id: number): void {
    const listOfTransactions = this.readTransactions();
    const index = listOfTransactions.findIndex(transaction => transaction.id === id);

    if (index < 0) {
      throw new NotFoundException('Transaction not found');
    }

    listOfTransactions.splice(index, 1);
    this.writeTransactions(listOfTransactions);
  }
}