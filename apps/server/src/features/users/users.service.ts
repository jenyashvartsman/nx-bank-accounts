import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../../db/repositories/users.repository';
import { AccountDto, UserAddressDto, UserDto } from '@nx-bank-accounts/dtos';
import { UsersAddressesRepository } from '../../db/repositories/users-addresses.repository';
import { AccountsRepository } from '../../db/repositories/accounts.repository';

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly usersAddressesRepository: UsersAddressesRepository,
    private readonly accountsRepository: AccountsRepository
  ) {}

  getAll(): UserDto[] {
    return this.usersRepository.findAll();
  }

  getOne(id: string): UserDto | null {
    return this.usersRepository.findOne(id);
  }

  getOneAddress(id: string): UserAddressDto | null {
    return this.usersAddressesRepository.findOneByUserId(id);
  }

  getAllAccounts(id: string): AccountDto[] {
    return this.accountsRepository.findAllByUserId(id);
  }
}
