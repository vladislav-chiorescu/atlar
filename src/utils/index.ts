export const upperCaseFirstLetter = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1)

export const setDate = (date: Date) =>
  [date.getDate(), date.getMonth() + 1, date.getFullYear()].join('/')
