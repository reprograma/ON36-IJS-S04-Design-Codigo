import { Injectable, NotFoundException } from '@nestjs/common';
import { Account } from './account.model';


@Injectable()
export class AccountsServicse {
    private accounts: Account[] = [
        { id: 1, name: 'John Doe', balance: 1000 },
        { id: 2, name: 'Jane Doe', balance: 500 },
        // Adicione mais contas conforme necessário
      ];
    private idCounter = 1;

    createAccount(name: string, balance: number): Account {
        const newAccount = new Account(this.idCounter++, name, balance);
        this.accounts.push(newAccount);
        return newAccount;
      }
    
      findAll(): Account[] {
        return this.accounts;
      }
    
      findById(id: number): Account {
        return this.accounts.find(account => account.id ===  Number(id));
      }

      getTotalBalance(): number {
        console.log('teste', this.accounts.reduce((total, account) => total + account.balance, 0))
        return this.accounts.reduce((total, account) => total + account.balance, 0);
      }

      updateBalance(id: number, newBalance: number): Account {
        const account = this.findById(id);
        if (!account) {
          throw new NotFoundException('Account not found');
        }
        account.balance = newBalance;
        return account;
      }
}
