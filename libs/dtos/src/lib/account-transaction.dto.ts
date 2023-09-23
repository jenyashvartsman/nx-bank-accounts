export interface AccountTransactionDto {
  id: string;
  accountNumber: string;
  type: string;
  description: string;
  amount: number;
  createdAt: Date;
}
