import React from 'react'
import { makeDecorator } from '@storybook/addons'

export default makeDecorator({
  name: 'withBaseStyles',
  wrapper: (storyFn, context) => {
    const WrappedComponent = storyFn(context)

    return (
      <div className="relative">
        <div className="absolute">
          <div className="fixed h-full w-full">
            <div className="handles-bg absolute bg-fixed bg-cover bg-top w-full h-full bg-no-repeat"></div>
          </div>
        </div>
        <div className="relative container mx-auto py-4 px-2">
          {WrappedComponent}
        </div>
      </div>
    )
  }
})
