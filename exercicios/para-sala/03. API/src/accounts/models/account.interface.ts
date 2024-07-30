import { AccountType } from "../enums/account-type.enum";

export interface Account {
    id: number;
    name: string;
    balance: number;
    type: AccountType;
}