import { SenatorSocialHandlesResponse } from '../types/SenatorSocialHandleResponse'

export const useSenatorSocialHandles = () => {
  const getSenatorSocialHandles = async () => {
    const senatorSocialHandlesList: SenatorSocialHandlesResponse = await (await (await fetch('https://www.extendpua.org/_functions/senatorSocialHandles')).json())

    return senatorSocialHandlesList.items
  }

  return { getSenatorSocialHandles }
}
