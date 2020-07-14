import { SenatorSocialHandleRecord } from "types/SenatorSocialHandleRecord"
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faMailBulk, faPhone } from '@fortawesome/pro-regular-svg-icons'

export const useBuildSocialInfo = () => {
  const buildInstagram = (senator: SenatorSocialHandleRecord) => {
    return {
      platform: 'instagram',
      handle: senator.igHandle,
      url: senator.igLink,
      icon: faInstagram
    }
  }

  const buildFacebook = (senator: SenatorSocialHandleRecord) => {
    return {
      platform: 'facebook',
      handle: senator.facebookPage,
      url: senator.facebookLink,
      icon: faFacebook
    }
  }

  const buildTwitter = (senator: SenatorSocialHandleRecord) => {
    return {
      platform: 'twitter',
      handle: senator.twitterHandle,
      url: senator.twitterLink,
      icon: faTwitter
    }
  }

  const buildPhone = (senator: SenatorSocialHandleRecord) => {
    return {
      platform: 'phone',
      handle: senator.phoneNumber,
      url: `tel:${senator.phoneNumber}`,
      icon: faPhone
    }
  }

  const buildMail = (_senator?: SenatorSocialHandleRecord) => {
    return {
      platform: 'mail',
      handle: 'Write your senator',
      url: 'https://www.extendpua.org/write',
      icon: faMailBulk
    }
  }

  return {
    buildInstagram,
    buildFacebook,
    buildTwitter,
    buildPhone,
    buildMail
  }
}
