import { currencyStringToNumber } from './currencyStringToNumber'

export const formatCurrency = (amount: string | number) => {
  const stringifiedAmountNumbers = currencyStringToNumber(amount).toString()

  const addCommaSeparators = (x: string) => {
    return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const prependCurrencySymbol = (stringifiedAmount: string) => `$${stringifiedAmount}`

  return prependCurrencySymbol(addCommaSeparators(stringifiedAmountNumbers))
}
