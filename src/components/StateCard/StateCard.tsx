import React, { Suspense, lazy } from 'react'
import { AWRAState } from 'types/AWRAState'
import capitalize from 'lodash/capitalize'
import { useUsStates } from 'hooks/useUsStates'
import { formatCurrency } from 'util/formatCurrency'
import classNames from 'classnames'

interface StateCardProps {
  usState: AWRAState;
}

const StateCard = (props: StateCardProps) => {
  const { usState } = props
  const { fullStateName, weeklyLivingWage } = useUsStates()

  const usStateClassName = classNames({
    'text-blue-tier-0': usState.tier === 'No Tier',
    'text-blue-tier-1': usState.tier === 'Tier 1',
    'text-blue-tier-2': usState.tier === 'Tier 2',
    'text-blue-tier-3': usState.tier === 'Tier 3',
    'text-blue-tier-4': usState.tier === 'Tier 4',
    'text-blue-tier-5': usState.tier === 'Tier 5',
    'text-blue-tier-6': usState.tier === 'Tier 6',
  })
  const pathToSvg = `components/StateSVGs/${capitalize(usState.state)}`
  const StateSVG = lazy(() => import(pathToSvg))

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
              <p className="text-sm text-gray-600 font-lulo">{usState.tier}</p>
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
              <dt className="inline-block w-3/4">3-Month average:</dt>
              <dd className="inline-block w-1/4 text-right">{usState.monthAverage}%</dd>
              <dt className="inline-block w-3/4">Current:</dt>
              <dd className="inline-block w-1/4 text-right">{usState.currentUeRate}%</dd>
            </dl>
          </div>
        </div>

        <div className="mt-4">
          <h4 className="text-sm font-luloBold">Unemployment Payouts</h4>
          <div className="w-full">
            <dl className="w-full">
              <dt className="inline-block w-3/4">State max:</dt>
              <dd className="inline-block w-1/4 text-right">{formatCurrency( usState.stateMaxUnemploymentPayout)}</dd>
              <dt className="inline-block w-3/4">Additional FPUC under AWFR Act:</dt>
              <dd className="inline-block w-1/4 text-right">{formatCurrency( usState.additionalFpucUnderAwfrAct)}</dd>
              <dt className="inline-block w-3/4">Weekly living wage:</dt>
              <dd className="inline-block w-1/4 text-right">{formatCurrency( weeklyLivingWage(usState.state))}</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StateCard
