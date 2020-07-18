import { AWRAState } from 'types/AWRAState'

export const useAWRAStates = () => {
  const getAWRAStates = async () => {
    const { items } = await (await (await fetch('https://www.extendpua.org/_functions/awra_states')).json())
    return items as AWRAState[]
  }

  return { getAWRAStates }
}
