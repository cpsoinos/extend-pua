import React from 'react'
import { ReactComponent as Logo } from '../../assets/ePUA_Logo.svg'
import Button from '../Button/Button'

const Header = () => {
  return (
    <div>
      <Button href="https://www.extendpua.org/">
        <Logo />
      </Button>
      <div className="text-center text-white">
        <p className="font-luloBold text-xs">PANDEMIC ASSISTANCE SHOULD CONTINUE UNTIL THE PANDEMIC IS OVER</p>
        <p className="font-lulo text-xxs italic">#MitchBetterHaveMyMoney | #ExtendPUA | #ExtendFPUC | #SaveThe600 @ExtendPUA</p>
      </div>
    </div>
  )
}

export default Header
