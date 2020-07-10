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

  const buildEmailAndPhone = (senator: SenatorSocialHandleRecord) => {
    return {
      platform: 'emailAndPhone',
      handle: 'Email',
      url: 'https://www.extendpua.org/write',
      phone: senator.phoneNumber
    }
  }

  return {
    buildInstagram,
    buildFacebook,
    buildTwitter,
    buildEmailAndPhone
  }
}
