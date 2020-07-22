import { default as stateNames } from 'assets/stateNames.json'
import { default as annualLivingWages } from 'assets/annualLivingWages.json'
import { AWRAState } from 'types/AWRAState'
import classNames from 'classnames'

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

  const awraStateClassName = (usState: AWRAState) => {
    return classNames({
      'text-blue-tier-0': usState.tier === 'No Tier',
      'text-blue-tier-1': usState.tier === 'Tier 1',
      'text-blue-tier-2': usState.tier === 'Tier 2',
      'text-blue-tier-3': usState.tier === 'Tier 3',
      'text-blue-tier-4': usState.tier === 'Tier 4',
      'text-blue-tier-5': usState.tier === 'Tier 5',
      'text-blue-tier-6': usState.tier === 'Tier 6',
    })
  }

  return { fullStateName, annualLivingWage, monthlyLivingWage, weeklyLivingWage, awraStateClassName }
}
