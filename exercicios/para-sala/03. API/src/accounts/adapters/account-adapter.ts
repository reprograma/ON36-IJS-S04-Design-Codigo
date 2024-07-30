import { Injectable } from '@nestjs/common';
import { Account } from '../models/account.interface';
import { AccountType } from '../enums/account-type.enum';
import { SavingsAccountAdapter } from './savings-account-adapter';
import { CheckingAccountAdapter } from './checking-account-adapter';
import { AccountCreditCheckAdapter } from './account-credit-check-adapter.interface';

@Injectable()
export class AccountAdapter {
  createAdapter(account: Account): AccountCreditCheckAdapter {
    switch (account.type) {
      case AccountType.Savings:
        return new SavingsAccountAdapter(account);
      case AccountType.Checking:
        return new CheckingAccountAdapter(account);
      default:
        throw new Error('Invalid account type');
    }
  }
}