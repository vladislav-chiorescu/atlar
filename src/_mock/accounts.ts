import { faker } from '@faker-js/faker'

export type Account = {
  id: string
  accountName: string
  accountNumber: string
  currency: string
  amount: string
}

export const accounts: Account[] = [...Array(25)].map((_, index) => {
  faker.seed(index)

  return {
    id: faker.string.uuid(),
    accountName: faker.finance.accountName(),
    accountNumber: faker.finance.accountNumber(),
    currency: faker.finance.currencyCode(),
    amount: faker.finance.amount(),
  }
})
