import { CheckingAccount } from '../models/checking-account';
import { AccountCreditCheckAdapter } from './account-credit-check-adapter.interface';

export class CheckingAccountAdapter implements AccountCreditCheckAdapter {
  constructor(private checkingAccount: CheckingAccount) {}

  toCreditCheckFormat() {
    return {
      accountId: this.checkingAccount.id,
      accountHolderName: this.checkingAccount.name,
      currentBalance: this.checkingAccount.balance,
      accountType: 'Checking',
    };
  }
}