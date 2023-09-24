import { ApiProperty } from '@nestjs/swagger';

export class AccountTransactionDto {
  @ApiProperty({ example: '6d045e29-de91-4521-a06d-6a32411082a5' })
  id!: string;

  @ApiProperty({ example: '03831676' })
  accountNumber!: string;

  @ApiProperty({ example: 'payment' })
  type!: string;

  @ApiProperty({
    example:
      'deposit transaction at Ryan LLC using card ending with ***8436 for AMD 12.58 in account ***86758749',
  })
  description!: string;

  @ApiProperty({ example: 'amount' })
  amount!: number;

  @ApiProperty({ example: '2022-06-11T23:41:31.850Z' })
  createdAt!: Date;
}
