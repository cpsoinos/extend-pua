import { SenatorSocialHandlesResponse } from '../types/SenatorSocialHandleResponse'

export const useSenatorSocialHandles = () => {
  const getSenatorSocialHandles = async () => {
    const senatorSocialHandlesList: SenatorSocialHandlesResponse = await (await (await fetch('https://www.extendpua.org/_functions/senatorSocialHandles')).json())

    const socialHandles = senatorSocialHandlesList.items.filter((senator) => {
      return senator.last !== 'Last Name'
    })
    return socialHandles
  }

  return { getSenatorSocialHandles }
}
