export interface AccountTransactionDto {
  id: string;
  accountNumber: number;
  type: string;
  description: string;
  amount: number;
  createdAt: Date;
}
