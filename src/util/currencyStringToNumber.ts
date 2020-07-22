export const currencyStringToNumber = (amount: string | number) => {
  return parseInt(`${amount}`.replace(/\D/g, ''))
}
