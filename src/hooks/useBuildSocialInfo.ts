import { SenatorSocialHandleRecord } from '../types/SenatorSocialHandleResponse'

export const useBuildSocialInfo = () => {
  const buildInstagram = (senator: SenatorSocialHandleRecord) => {
    return {
      platform: 'instagram',
      handle: senator.igHandle,
      url: senator.igLink
    }
  }

  const buildFacebook = (senator: SenatorSocialHandleRecord) => {
    return {
      platform: 'facebook',
      handle: senator.facebookPage,
      url: senator.facebookLink
    }
  }

  const buildTwitter = (senator: SenatorSocialHandleRecord) => {
    return {
      platform: 'twitter',
      handle: senator.twitterHandle,
      url: senator.twitterLink
    }
  }

  const buildEmail = (senator: SenatorSocialHandleRecord) => {
    return {
      platform: 'email',
      handle: senator.phoneNumber,
      url: 'https://www.extendpua.org/write',
      phone: senator.phoneNumber
    }
  }

  const buildPhone = (senator: SenatorSocialHandleRecord) => {
    return {
      platform: 'phone',
      handle: senator.phoneNumber,
      url: `tel:${senator.phoneNumber}`,
      phone: senator.phoneNumber
    }
  }

  return {
    buildInstagram,
    buildFacebook,
    buildTwitter,
    buildEmail,
    buildPhone
  }
}
