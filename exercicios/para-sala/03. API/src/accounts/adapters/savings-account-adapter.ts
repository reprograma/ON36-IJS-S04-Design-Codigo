import { SavingsAccount } from '../models/savings-account';
import { AccountCreditCheckAdapter } from './account-credit-check-adapter.interface';

export class SavingsAccountAdapter implements AccountCreditCheckAdapter {
  constructor(private savingsAccount: SavingsAccount) {}

  toCreditCheckFormat() {
    return {
      accountId: this.savingsAccount.id,
      accountHolderName: this.savingsAccount.name,
      currentBalance: this.savingsAccount.balance,
      accountType: 'Savings',
    };
  }
}