import { ReactComponent as EmailIcon } from 'assets/icons/Handles_SocialIcon_Email.svg'
import { ReactComponent as FacebookIcon } from 'assets/icons/Handles_SocialIcon_Facebook.svg'
import { ReactComponent as InstagramIcon } from 'assets/icons/Handles_SocialIcon_Instagram.svg'
import { ReactComponent as MeetIcon } from 'assets/icons/Handles_SocialIcon_Meet.svg'
import { ReactComponent as PhoneIcon } from 'assets/icons/Handles_SocialIcon_Phone.svg'
import { ReactComponent as TwitterIcon } from 'assets/icons/Handles_SocialIcon_Twitter.svg'
import { CongressDbRecord } from 'types/CongressDbRecord'

export const useBuildSocialInfo = () => {
  const buildInstagram = (congressPerson: CongressDbRecord) => {
    return {
      platform: 'instagram' as const,
      handle: congressPerson.igHandle,
      url: congressPerson.igLink,
      icon: InstagramIcon
    }
  }

  const buildFacebook = (congressPerson: CongressDbRecord) => {
    return {
      platform: 'facebook' as const,
      handle: congressPerson.facebookPage,
      url: congressPerson.facebookLink,
      icon: FacebookIcon
    }
  }

  const buildTwitter = (congressPerson: CongressDbRecord) => {
    return {
      platform: 'twitter' as const,
      handle: congressPerson.twitterHandle,
      url: congressPerson.twitterLink,
      icon: TwitterIcon
    }
  }

  const buildPhone = (congressPerson: CongressDbRecord) => {
    return {
      platform: 'phone' as const,
      handle: `DC: ${congressPerson.phoneNumber}\n${congressPerson.localPhone}`,
      url: 'https://www.extendpua.org/call',
      icon: PhoneIcon
    }
  }

  const buildEmail = (_congressPerson?: CongressDbRecord) => {
    return {
      platform: 'email' as const,
      handle: 'Email your elected official',
      url: 'https://www.extendpua.org/write',
      icon: EmailIcon
    }
  }

  const buildMeet = (_congressPerson?: CongressDbRecord) => {
    return {
      platform: 'meet' as const,
      handle: 'Meet your elected official',
      url: 'https://www.extendpua.org/meet',
      icon: MeetIcon
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
