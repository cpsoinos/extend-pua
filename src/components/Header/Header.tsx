import React from 'react'
import Button from 'components/Button/Button'

const LOGO_BLUE_SRC = 'https://res.cloudinary.com/extend-pua/image/upload/c_scale,w_1400,dpr_auto,q_auto/v1604794008/brand/Handles_XPUAHeader_Blue-PNG_nrwi0n.png'

const Header = () => {
  return (
    <div>
      <div className="font-luloBold text-xxs md:text-base text-center text-white md:tracking-widest">
        <p className="inline-block">SENATE&nbsp;AND&nbsp;HOUSE CONTACT&nbsp;DATABASE</p>
        <span className="md:block lg:inline-block md:text-xs lg:text-base">
          <span className="hidden lg:inline-block">&nbsp;|&nbsp;</span>
          A&nbsp;RESOURCE&nbsp;FROM:
        </span>
      </div>
      <Button href="https://www.extendpua.org/">
        <img src={LOGO_BLUE_SRC} alt="ExtendPUA logo" />
      </Button>
      <p className="font-luloBold text-center text-white text-xxs md:text-base md:tracking-widest">ADVOCATING FOR COMPREHENSIVE PANDEMIC RELIEF FOR ALL PEOPLE</p>
    </div>
  )
}

export default Header
