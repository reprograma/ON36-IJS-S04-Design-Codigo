import { Controller, Get, Post, Body, Put, Delete, Param, ParseIntPipe, ParseFloatPipe } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { Transaction, TransactionType } from './transactions.model';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  createTransaction(
    @Body('accountId') accountId: number,
    @Body('amount') amount: number,
    @Body('type') type: TransactionType
  ): Transaction {
    return this.transactionsService.createTransaction(accountId, amount, type);
  }

  @Get()
  findAll(): Transaction[] {
    return this.transactionsService.findAll();
  }

  @Put(':id')
  updateTransaction(
    @Param('id', ParseIntPipe) id: number,
    @Body('accountId', ParseIntPipe) accountId: number,
    @Body('amount', ParseFloatPipe) amount: number,
    @Body('type') type: TransactionType,
    @Body('date') date: Date,
  ): Transaction {
    const newTransaction = new Transaction( id, accountId, amount, type, date);
    return this.transactionsService.updateTransaction(newTransaction);
  }

  @Delete(':id')
  removeTransaction(@Param('id', ParseIntPipe) id: number): void {
    return this.transactionsService.removeTransaction(id);
  }
}
