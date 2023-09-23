import { Injectable, Logger, OnApplicationBootstrap } from '@nestjs/common';
import {
  AccountDto,
  AccountTransactionDto,
  UserAddressDto,
  UserDto,
} from '@nx-bank-accounts/dtos';
import { faker } from '@faker-js/faker';

@Injectable()
export class FakeDbService implements OnApplicationBootstrap {
  // fake data
  private users: UserDto[] = [];
  private usersAddressees: UserAddressDto[] = [];
  private accounts: AccountDto[] = [];
  private accountsTransactions: AccountTransactionDto[] = [];

  constructor(private readonly logger: Logger) {}

  onApplicationBootstrap(): void {
    this.users = this.createUsers();
    this.usersAddressees = this.createUsersAddresses();
    this.accounts = this.createAccounts();
    this.accountsTransactions = this.createAccountsTransactions();
    this.logCreateData();
  }

  // getters
  getUsers(): UserDto[] {
    return [...this.users];
  }

  getUserAddress(): UserAddressDto[] {
    return [...this.usersAddressees];
  }

  getAccounts(): AccountDto[] {
    return [...this.accounts];
  }

  getAccountsTransactions(): AccountTransactionDto[] {
    return [...this.accountsTransactions];
  }

  // fake data creation
  private createUsers(): UserDto[] {
    return Array.from({ length: 20 }, () => {
      const firstName = faker.person.firstName();
      const lastName = faker.person.lastName();

      return {
        id: faker.string.uuid(),
        firstName,
        lastName,
        email: faker.internet.email({ firstName, lastName }),
        phoneNumber: faker.phone.number(),
        createdAt: faker.date.past({ years: 5 }),
      };
    });
  }

  private createUsersAddresses(): UserAddressDto[] {
    return this.users.map((user) => ({
      id: faker.string.uuid(),
      userId: user.id,
      streetAddress: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      zipCode: faker.location.zipCode(),
    }));
  }

  private createAccounts(): AccountDto[] {
    const accountsPerUser: AccountDto[][] = this.users.map((user) => {
      const userAccountsCount = faker.number.int({ min: 1, max: 5 });

      return Array.from(
        { length: userAccountsCount },
        () =>
          ({
            accountNumber: faker.finance.accountNumber(),
            userId: user.id,
            accountName: faker.finance.accountName(),
            routingNumber: faker.finance.routingNumber(),
            createdAt: faker.date.past({ years: 5 }),
          } as AccountDto)
      );
    });

    return [].concat(...accountsPerUser);
  }

  private createAccountsTransactions(): AccountTransactionDto[] {
    const transactionsPerAccout: AccountTransactionDto[][] = this.accounts.map(
      (account) => {
        const accountTransactionsCount = faker.number.int({ min: 0, max: 100 });

        return Array.from(
          { length: accountTransactionsCount },
          () =>
            ({
              id: faker.string.uuid(),
              accountNumber: account.accountNumber,
              type: faker.finance.transactionType(),
              description: faker.finance.transactionDescription(),
              amount: faker.number.float({
                min: 5,
                max: 1_000_000,
                precision: 2,
              }),
              createdAt: faker.date.past({ years: 5 }),
            } as AccountTransactionDto)
        );
      }
    );

    return [].concat(...transactionsPerAccout);
  }

  // log
  private logCreateData(): void {
    const users = `Users: ${this.users.length.toLocaleString()}`;
    const addresses = `Address: ${this.usersAddressees.length.toLocaleString()}`;
    const accounts = `Accounts: ${this.accounts.length.toLocaleString()}`;
    const transactions = `Transactions: ${this.accountsTransactions.length.toLocaleString()}`;
    this.logger.log(
      `Created fake data - ${users}, ${addresses}, ${accounts}, ${transactions}`
    );
  }
}
