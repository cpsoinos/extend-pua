export const formatCurrency = (amount: string | number) => {
  const stringifiedAmountNumbers = `${amount}`.replace(/\D/g, '')

  const addCommaSeparators = (x: string) => {
    return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const prependCurrencySymbol = (stringifiedAmount: string) => `$${stringifiedAmount}`

  return prependCurrencySymbol(addCommaSeparators(stringifiedAmountNumbers))
}
