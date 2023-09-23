import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../../db/repositories/users.repository';
import { UserAddressDto, UserDto } from '@nx-bank-accounts/dtos';
import { UsersAddressesRepository } from '../../db/repositories/users-addresses.repository';

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly usersAddressesRepository: UsersAddressesRepository
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
}
