export const currencyStringToNumber = (amount: string | number) => {
  return parseInt(parseInt(`${amount}`.replace(/\$/g, '')).toFixed())
}
