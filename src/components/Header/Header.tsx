import React from 'react'
import Button from 'components/Button/Button'

const LOGO_BLUE_SRC = 'https://res.cloudinary.com/extend-pua/image/upload/c_scale,w_1400,dpr_auto,q_auto/v1604794008/brand/Handles_XPUAHeader_Blue-PNG_nrwi0n.png'

const links = [
  {
    text: 'HOME',
    name: 'nav_HOME',
    url: 'https://www.extendpua.org'
  },
  {
    text: 'CALL SCRIPTS',
    name: 'nav_CALL SCRIPTS',
    url: 'https://www.extendpua.org/call'
  },
  {
    text: 'TWEETS',
    name: 'nav_TWEETS',
    url: 'https://www.extendpua.org/your-senator'
  },
  {
    text: 'DONATE',
    name: 'nav_DONATE',
    url: 'https://www.extendpua.org/donate'
  },
  {
    text: 'LEARN MORE',
    name: 'nav_LEARN MORE',
    url: 'https://www.extendpua.org/the-mission'
  },
]

const Header = () => {
  return (
    <div>
      <div className="font-luloBold text-xxs md:text-base text-center text-white md:tracking-widest">
        <p className="inline-block">SENATE&nbsp;AND&nbsp;HOUSE CONTACT&nbsp;DATABASE</p>
        <span className="md:block lg:inline-block md:text-xs lg:text-base">
          <span className="md:hidden">&nbsp;|&nbsp;</span>
          A&nbsp;RESOURCE&nbsp;FROM:
        </span>
      </div>
      <Button href="https://www.extendpua.org/">
        <img src={LOGO_BLUE_SRC} alt="ExtendPUA logo" />
      </Button>
      <p className="font-luloBold text-center text-white text-xxs md:text-base md:tracking-widest">ADVOCATING FOR COMPREHENSIVE PANDEMIC RELIEF FOR&nbsp;ALL&nbsp;PEOPLE</p>
      <nav className="hidden md:flex justify-evenly font-luloBold text-xs text-white bg-brand-red border-white border-solid border-2 mt-4">
        {links.map((link) => {
          return <Button key={link.text} href={link.url} name={link.name}>{link.text}</Button>
        })}
      </nav>
    </div>
  )
}

export default Header
