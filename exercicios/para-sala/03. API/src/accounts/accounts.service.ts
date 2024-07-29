import { Injectable, NotFoundException } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { Account } from './models/account.model';
import { AccountType } from './enums/account-type.enum';
import { AccountFactory } from './factories/account.factory';

@Injectable()
export class AccountsService {
  private readonly filePath = path.resolve('src/accounts/services/accounts.json');
  private idCounter: number;
  
  constructor(private accountFactory: AccountFactory) {
    const accounts = this.readAccounts();
    this.idCounter = accounts.length > 0 ? accounts[accounts.length - 1].id + 1 : 1;

  }

  private readAccounts(): Account[] {
    const data = fs.readFileSync(this.filePath, 'utf8');
    return JSON.parse(data) as Account[];
  }

  private writeAccounts(accounts: Account[]): void {
    fs.writeFileSync(this.filePath, JSON.stringify(accounts, null, 2), 'utf8');
  }

  findById(id: number): Account {
    const listOfAccounts = this.readAccounts();
    const account = listOfAccounts.find(account => account.id === id);
    if (!account) {
      throw new NotFoundException(`Account with id ${id} not found`);
    }
    return account;
  }

  getTotalBalance(): number {
    const listOfAccounts = this.readAccounts();
    return listOfAccounts.reduce((total, account) => total + account.balance, 0);
  }

  updateBalance(id: number, newBalance: number): Account {
    const listOfAccounts = this.readAccounts();
    const accountToUpdate = listOfAccounts.find(account => account.id === Number(id));

    if (!accountToUpdate) {
      throw new NotFoundException('Account not found');
    }

    accountToUpdate.balance = newBalance;
    this.writeAccounts(listOfAccounts);

    return accountToUpdate;
  }

  createAccount(name: string, balance: number, type: AccountType): Account {
    const listOfAccounts = this.readAccounts();

    const newAccount = this.accountFactory.createAccount(
      type,
      this.idCounter,
      name,
      balance,
    );

    listOfAccounts.push(newAccount);
    this.writeAccounts(listOfAccounts);

    return newAccount;
  }

  findAll(): Account[] {
    return this.readAccounts();
  }

  removeAccount(id: number): void {
    const listOfAccounts = this.readAccounts();
    const indexOfAccount = listOfAccounts.findIndex(account => account.id === id);

    if (indexOfAccount < 0) {
      throw new NotFoundException('Account not found');
    }
    listOfAccounts.splice(indexOfAccount, 1);

    this.writeAccounts(listOfAccounts);
  }
}
