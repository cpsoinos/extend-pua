import React from 'react'
import { ReactComponent as LogoBlue } from 'assets/svgs/Handles_XPUAFooter_Blue-SVG.svg'
import { ReactComponent as LogoRed } from 'assets/svgs/Handles_XPUAFooter_Red-SVG.svg'
import { ReactComponent as LogoPurple } from 'assets/svgs/Handles_XPUAFooter_Purple-SVG.svg'

interface LogoProps {
  party: 'D' | 'R' | 'I***'
  className?: string
}

const Logo = (props: LogoProps) => {
  const { party, className } = props

  switch (party) {
    case 'D': {
      return <LogoBlue className={className} />
    }
    case 'R': {
      return <LogoRed className={className} />
    }
    default: {
      return <LogoPurple className={className} />
    }
  }
}

export default React.memo(Logo)
