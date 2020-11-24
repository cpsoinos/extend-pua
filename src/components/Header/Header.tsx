import React, { useState } from 'react'
import Button from 'components/Button/Button'
import classNames from 'classnames'

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
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const mobileMenuClasses = classNames('md:hidden', { hidden: !menuIsOpen })

  return (
    <div>
      <div className="font-luloBold text-xxs md:text-base text-center text-white md:tracking-widest">
        <p className="inline-block">SENATE&nbsp;AND&nbsp;HOUSE CONTACT&nbsp;DATABASE</p>
        <span className="md:block lg:inline-block md:text-xs lg:text-base">
          <span className="md:hidden lg:inline-block">&nbsp;|&nbsp;</span>
          A&nbsp;RESOURCE&nbsp;FROM:
        </span>
      </div>
      <Button href="https://www.extendpua.org/">
        <img src={LOGO_BLUE_SRC} alt="ExtendPUA logo" />
      </Button>
      <p className="font-luloBold text-center text-white text-xxs md:text-base md:tracking-widest">ADVOCATING FOR COMPREHENSIVE PANDEMIC RELIEF FOR&nbsp;ALL&nbsp;PEOPLE</p>
      <nav>
        <div className="hidden md:flex justify-evenly font-luloBold text-xs text-white bg-brand-red border-white border-solid border-2 mt-4">
          {links.map((link) => {
            return <Button key={link.text} href={link.url} name={link.name}>{link.text}</Button>
          })}
        </div>


        <div className="flex mt-4 md:hidden">
          {/* <!-- Mobile menu button --> */}
          <Button
            className="font-luloBold text-xs text-white"
            name="nav_mobile-menu"
            buttonType="button"
            onClick={() => setMenuIsOpen(!menuIsOpen)}
          >
            <>
              {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
              <svg className={classNames('h-6', 'w-6', { hidden: menuIsOpen, 'inline-block': !menuIsOpen })} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
              <svg className={classNames('h-6', 'w-6', { hidden: !menuIsOpen, 'inline-block': menuIsOpen })} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span className='ml-2'>MENU</span>
            </>
          </Button>
        </div>

        <div className={mobileMenuClasses}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => {
              return <Button className="block px-3 py-2 rounded-md text-base font-medium text-white bg-brand-red focus:outline-none focus:text-white focus:bg-brand-red" key={link.text} href={link.url} name={link.name}>{link.text}</Button>
            })}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
