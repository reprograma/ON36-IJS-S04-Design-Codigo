import { Controller, Get, Post, Body, Param, Put, Patch, Delete, ParseIntPipe } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { Account } from './models/account.model';
import { AccountType } from './enums/account-type.enum';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Post()
  createAccount(@Body('name') name: string, @Body('balance') balance: number, @Body('type') type: AccountType): Account {
    return this.accountsService.createAccount(name, balance, type);
  }

  @Get()
  findAll(): Account[] {
    return this.accountsService.findAll();
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number): Account {
    return this.accountsService.findById(id);
  }

  @Get('total/balance')
  getTotalBalance(): { totalBalance: number } {
    const totalBalance = this.accountsService.getTotalBalance()
    return {totalBalance};
  }
  
  @Patch(':id/balance-update')
  updateBalance(@Param('id', ParseIntPipe) id: number, @Body('balance') newBalance: number): Account {
    const updatedAccount = this.accountsService.updateBalance(id, newBalance);
    return updatedAccount;
  }

  @Delete(':id')
  removeAccount(@Param('id', ParseIntPipe) id: number): void {
    return this.accountsService.removeAccount(id);
  }
}