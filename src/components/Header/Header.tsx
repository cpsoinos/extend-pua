import React from 'react'
import Logo from 'assets/ePUA_Logo_Transparent.png'
import Button from 'components/Button/Button'

const Header = () => {
  return (
    <div>
      <Button href="https://www.extendpua.org/">
        <img src={Logo} alt="Logo" />
      </Button>
      <div className="text-center text-white mt-4">
        <p className="font-luloBold text-xs">PANDEMIC ASSISTANCE SHOULD CONTINUE UNTIL THE PANDEMIC IS OVER</p>
        <p className="font-lulo text-xxs italic">#MitchBetterHaveMyMoney | #ExtendPUA | #ExtendFPUC | #SaveThe600 @ExtendPUA</p>
      </div>
    </div>
  )
}

export default Header
