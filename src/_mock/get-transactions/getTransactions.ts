import { faker } from '@faker-js/faker'

export type Transaction = {
  id: string
  transactionType: string
  transactionDescription: string
  transactionDate: Date
}

export const getTransactions = (index: number) =>
  [...Array(10)].map((_, idx) => {
    const seed = Number(`${index}0`)
    faker.seed(seed + idx)

    return {
      id: faker.string.uuid(),
      transactionType: faker.finance.transactionType(),
      transactionDescription: faker.finance.transactionDescription(),
      transactionDate: faker.date.recent({ days: 90 }),
    }
  })
