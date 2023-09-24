import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AccountsService } from './accounts.service';
import { AccountDto, AccountTransactionDto } from '@nx-bank-accounts/dtos';

@ApiTags('accounts')
@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all accounts' })
  @ApiResponse({
    status: 200,
    description: 'All accounts',
    type: AccountDto,
    isArray: true,
  })
  getAll(): AccountDto[] {
    return this.accountsService.getAll();
  }

  @Get(':accountNumber/transactions')
  @ApiOperation({ summary: 'Get all account transactions' })
  @ApiResponse({
    status: 200,
    description: 'All account transactions',
    type: AccountTransactionDto,
    isArray: true,
  })
  @ApiParam({
    name: 'accountNumber',
    description: 'Accuunt number',
    required: true,
    type: String,
    example: '49759053',
  })
  getAllTransactions(
    @Param('accountNumber') accountNumber: string
  ): AccountTransactionDto[] {
    return this.accountsService.getAllTransactions(accountNumber);
  }
}
