import { Injectable } from '@nestjs/common';
import { SavingsAccount } from '../models/savings-account.model';
import { CheckingAccount } from '../models/checking-account.model';
import { Account } from '../models/account.model';
import { AccountType } from '../enums/account-type.enum';

@Injectable()
export class AccountFactory {
  createAccount(type: AccountType, id: number, name: string, balance: number): Account {
    switch (type) {
      case AccountType.Savings:
        return new SavingsAccount(id, name, balance);
      case AccountType.Checking:
        return new CheckingAccount(id, name, balance);
      default:
        throw new Error('Invalid account type');
    }
  }
}