export enum TransactionType {
    DEBIT = 'debit',
  }
  
export class Transaction {
    constructor(
    public id: number,
    public accountId: number,
    public amount: number,
    public type: TransactionType,
    public date: Date
    ) {}
}