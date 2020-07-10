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
    <div className="flex flex-wrap md:flex-no-wrap items-center border border-solid border-1 border-red-flag p-2">
      <SenatorBasicInfo
        className="w-full md:w-1/4 md:min-w-1/4"
        lastName={lastName}
        firstName={firstName}
        usState={usState}
        party={party}
        upForReElection={upForReElection}
      />
      <div className="flex mt-2 md:mt-0 flex-wrap w-full items-center">
        {socialHandles.map((platformInfo, i) => {
          return (
            <div className="w-1/2 md:w-1/4">
              <SocialHandleButton key={i} {...platformInfo} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SenatorSocialInfoRow
