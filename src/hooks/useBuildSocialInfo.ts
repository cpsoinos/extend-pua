import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMailBulk, faPhone } from '@fortawesome/pro-regular-svg-icons'
import { CongressDbRecord } from 'types/CongressDatabaseResponse'

export const useBuildSocialInfo = () => {
  const buildInstagram = (congressPerson: CongressDbRecord) => {
    return {
      platform: 'instagram',
      handle: congressPerson.igHandle,
      url: congressPerson.igLink,
      icon: faInstagram
    }
  }

  const buildFacebook = (congressPerson: CongressDbRecord) => {
    return {
      platform: 'facebook',
      handle: congressPerson.facebookPage,
      url: congressPerson.facebookLink,
      icon: faFacebook
    }
  }

  const buildTwitter = (congressPerson: CongressDbRecord) => {
    return {
      platform: 'twitter',
      handle: congressPerson.twitterHandle,
      url: congressPerson.twitterLink,
      icon: faTwitter
    }
  }

  const buildPhone = (congressPerson: CongressDbRecord) => {
    return {
      platform: 'phone',
      handle: congressPerson.phoneNumber,
      url: `tel:${congressPerson.phoneNumber}`,
      icon: faPhone
    }
  }

  const buildEmail = (_congressPerson?: CongressDbRecord) => {
    return {
      platform: 'email',
      handle: 'Email your elected official',
      url: 'https://www.extendpua.org/write',
      icon: faEnvelope
    }
  }

  const buildMeet = (_congressPerson?: CongressDbRecord) => {
    return {
      platform: 'virtual',
      handle: 'Meet your elected official',
      url: 'https://www.extendpua.org/meet',
      icon: faMailBulk
    }
  }

  return {
    buildInstagram,
    buildFacebook,
    buildTwitter,
    buildPhone,
    buildEmail,
    buildMeet
  }
}
