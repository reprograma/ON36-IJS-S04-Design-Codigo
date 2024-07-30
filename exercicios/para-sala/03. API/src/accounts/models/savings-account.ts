import { Account } from './account.interface';
import { AccountType } from '../enums/account-type.enum';

export class SavingsAccount implements Account {
  type = AccountType.Savings;

  constructor(public id: number, public name: string, public balance: number) {}
}