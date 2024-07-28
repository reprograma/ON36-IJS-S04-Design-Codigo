import { Account } from './account.model';
import { AccountType } from '../enums/account-type.enum';

export class CheckingAccount implements Account {
  type = AccountType.Checking;

  constructor(public id: number, public name: string, public balance: number) {}
}