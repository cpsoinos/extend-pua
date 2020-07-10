import React from 'react'
import SenatorBasicInfo, { SenatorBasicInfoProps } from '../SenatorBasicInfo/SenatorBasicInfo'
import SocialHandleButton, { SocialHandleButtonProps } from '../SocialHandleButton/SocialHandleButton'

interface SenatorSocialInfoRowProps extends SenatorBasicInfoProps {
  instagram: SocialHandleButtonProps
  twitter: SocialHandleButtonProps
  facebook: SocialHandleButtonProps
  emailAndPhone: SocialHandleButtonProps
}

const SenatorSocialInfoRow = (props: SenatorSocialInfoRowProps) => {
  const { lastName, firstName, usState, party, upForReElection, instagram, twitter, facebook, emailAndPhone } = props
  const socialHandles = [instagram, twitter, facebook, emailAndPhone]

  return (
    <div className="flex items-center border border-solid border-1 border-red-600 p-2">
      <SenatorBasicInfo
        className="w-1/4 pr-12"
        lastName={lastName}
        firstName={firstName}
        usState={usState}
        party={party}
        upForReElection={upForReElection}
      />
      <div className="flex items-center space-x-2">
        {socialHandles.map((platformInfo, i) => {
          return <SocialHandleButton key={i} {...platformInfo} />
        })}
      </div>
    </div>
  )
}

export default SenatorSocialInfoRow
