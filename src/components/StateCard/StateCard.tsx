import React, { Suspense, lazy } from 'react'
import { AWRAState } from 'types/AWRAState'
import capitalize from 'lodash/capitalize'
import { useUsStates } from 'hooks/useUsStates'
import { formatCurrency } from 'util/formatCurrency'
import classNames from 'classnames'
import { currencyStringToNumber } from 'util/currencyStringToNumber'

interface StateCardProps {
  usState: AWRAState
  hide3moAvg?: boolean
  hideAdditionalFunding?: boolean
}

const StateCard = (props: StateCardProps) => {
  const { usState, hide3moAvg = false, hideAdditionalFunding = false } = props
  const { fullStateName, weeklyLivingWage } = useUsStates()

  const componentFileName = capitalize(usState.state)
  const StateSVG = lazy(() => import(`components/StateSVGs/${componentFileName}`))

  const usStateClassName = classNames({
    'text-blue-tier-0': usState.tier === 'No Tier',
    'text-blue-tier-1': usState.tier === 'Tier 1',
    'text-blue-tier-2': usState.tier === 'Tier 2',
    'text-blue-tier-3': usState.tier === 'Tier 3',
    'text-blue-tier-4': usState.tier === 'Tier 4',
    'text-blue-tier-5': usState.tier === 'Tier 5',
    'text-blue-tier-6': usState.tier === 'Tier 6',
  })

  const sumUnemploymentPayout = hideAdditionalFunding
    ? currencyStringToNumber(usState.stateAvg)
    : currencyStringToNumber(usState.stateAvg) + currencyStringToNumber(usState.additionalFpucUnderAwfrAct)

  const usStateWeeklyLivingWage = weeklyLivingWage(usState.state)
  const livingCostCovered = sumUnemploymentPayout - usStateWeeklyLivingWage

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-2 md:px-4 py-2">
      <div className="bg-white text-gray-900 p-4 rounded-md border border-solid border-gray-500">
        <div>
          <div className="flex flex-wrap sm:flex-no-wrap justify-center items-center w-full">
            <div className={usStateClassName}>
              <Suspense fallback="Loading...">
                <StateSVG fill="currentColor" />
              </Suspense>
            </div>
            <div className="px-4 text-center sm:text-left">
              {!hide3moAvg && <p className="text-sm text-gray-600 font-lulo">{usState.tier}</p>}
              <h3 className="text-gray-900 font-bold text-xl font-luloBold">{fullStateName(usState.state)}</h3>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h4 className="text-sm font-luloBold">Unemployed Population</h4>
          <div className="w-full">
            <dl className="w-full">
              <dt className="inline-block w-3/4">Pre-pandemic:</dt>
              <dd className="inline-block w-1/4 text-right">{usState.prepandemicUePopulation}</dd>
              <dt className="inline-block w-3/4">June:</dt>
              <dd className="inline-block w-1/4 text-right">{usState.juneUePopulation}</dd>
            </dl>
          </div>
        </div>

        <div className="mt-4">
          <h4 className="text-sm font-luloBold">Unemployment Rate</h4>
          <div className="w-full">
            <dl className="w-full">
              {!hide3moAvg && (
                <>
                  <dt className="inline-block w-3/4">3-Month average:</dt>
                  <dd className="inline-block w-1/4 text-right">{usState.monthAverage}%</dd>
                </>
              )}
              <dt className="inline-block w-3/4">Current:</dt>
              <dd className="inline-block w-1/4 text-right">{usState.currentUeRate}%</dd>
            </dl>
          </div>
        </div>

        <div className="mt-4">
          <h4 className="text-sm font-luloBold">Unemployment Payouts</h4>
          <div className="w-full">
            <dl className={classNames('w-full', { 'border-gray-900 border-b': !isNaN(usStateWeeklyLivingWage) })}>
              <dt className="inline-block w-3/4">State average:</dt>
              <dd className="inline-block w-1/4 text-right">{formatCurrency(usState.stateAvg)}</dd>
              {!hideAdditionalFunding && (
                <>
                  <dt className="inline-block w-3/4">Add'l FPUC under AWFR Act:</dt>
                  <dd className="inline-flex w-1/4 justify-between">
                    <span className="inline-flex">+</span>
                    <span className="inline-flex">{formatCurrency(usState.additionalFpucUnderAwfrAct)}</span>
                  </dd>
                </>
              )}
              {!isNaN(usStateWeeklyLivingWage) && (
                <>
                  <dt className="inline-block w-3/4">Weekly living wage:*</dt>
                  <dd className="inline-flex justify-between w-1/4 text-red-flag">
                    <span className="inline-flex">-</span>
                    <span className="inline-flex">{formatCurrency(usStateWeeklyLivingWage)}</span>
                  </dd>
                </>
              )}
            </dl>
            {!isNaN(usStateWeeklyLivingWage) && (
              <dl className="font-bold">
                <dt className="inline-block w-3/4">Total:</dt>
                <dd className="inline-flex justify-between w-1/4 text-red-flag">
                  <span className="inline-flex">-</span>
                  <span className="inline-flex">{formatCurrency(livingCostCovered)}</span>
                </dd>
              </dl>
            )}
          </div>
        </div>
        <div className="flex flex-row-reverse">
          <a className="max-w-1/2 pt-6" href="https://www.extendpua.org/" target="_blank" rel="noopener noreferrer">
            <img src="/ePUA_JPG_BlackOnWhite_LOGO.jpg" alt="ExtendPUA.org logo" loading="lazy" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default StateCard
