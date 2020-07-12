import React from 'react'
import { makeDecorator } from '@storybook/addons'

export default makeDecorator({
  name: 'withBaseStyles',
  wrapper: (storyFn, context) => {
    const WrappedComponent = storyFn(context)
    const styles = {
      backgroundImage: "url(https://static.wixstatic.com/media/11062b_49bd140ff6034d019057a7dddc081e2c~mv2.jpg/v1/fill/w_1920,h_1280,al_t,q_85,usm_0.66_1.00_0.01/11062b_49bd140ff6034d019057a7dddc081e2c~mv2.jpg)"
    }
    return (
      <div className="relative">
        <div className="absolute">
          <div className="fixed bg-background-black h-full w-full">
            <div className="absolute bg-fixed bg-cover bg-top w-full h-full opacity-10 bg-no-repeat" style={styles}></div>
          </div>
        </div>
        <div className="relative max-w-lg container mx-auto py-4">
          {WrappedComponent}
        </div>
      </div>
    )
  }
})
