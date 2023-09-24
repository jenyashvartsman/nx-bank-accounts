import { ApiProperty } from '@nestjs/swagger';

export class AccountDto {
  @ApiProperty({ example: '49759053' })
  accountNumber!: string;

  @ApiProperty({ example: '5b924701-9a71-4244-b14b-fb8861f72ad6' })
  userId!: string;

  @ApiProperty({ example: 'Credit Card Account' })
  accountName!: string;

  @ApiProperty({ example: '128841727' })
  routingNumber!: string;

  @ApiProperty({ example: '2021-09-26T23:21:42.377Z' })
  createdAt!: Date;
}
