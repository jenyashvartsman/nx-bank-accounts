import { Injectable } from '@nestjs/common';
import { UserAddressDto } from '@nx-bank-accounts/dtos';
import { FakeDbService } from '../data/fake-db.service';

@Injectable()
export class UsersAddressesRepository {
  constructor(private readonly fakeDbService: FakeDbService) {}

  findOneByUserId(userId: string): UserAddressDto | null {
    return this.fakeDbService
      .getUserAddress()
      .find((address) => address.userId === userId);
  }
}
