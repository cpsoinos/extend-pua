import { default as stateNames } from 'assets/stateNames.json'
import { default as annualLivingWages } from 'assets/annualLivingWages.json'

export const useUsStates = () => {
  const stateNameMappings: { [key: string]: string } = stateNames
  const livingWageMappings: { [key: string]: string } = annualLivingWages

  const fullStateName = (abbreviation: string) => (stateNameMappings[abbreviation])

  const annualLivingWage = (abbreviation: string) => {
    const stateName = fullStateName(abbreviation)
    return livingWageMappings[stateName]
  }
  const monthlyLivingWage = (abbreviation: string) => +(+annualLivingWage(abbreviation) / 12).toFixed(0)
  const weeklyLivingWage = (abbreviation: string) => +(+annualLivingWage(abbreviation) / 52).toFixed(0)

  return { fullStateName, annualLivingWage, monthlyLivingWage, weeklyLivingWage }
}
