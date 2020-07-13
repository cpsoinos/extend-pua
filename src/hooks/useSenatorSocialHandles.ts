import { SenatorSocialHandlesResponse } from 'types/SenatorSocialHandleResponse'
import senatorImages from 'assets/senatorImages.json'

export const useSenatorSocialHandles = () => {
  const getSenatorSocialHandles = async () => {
    const senatorSocialHandlesList: SenatorSocialHandlesResponse = await (await (await fetch('https://www.extendpua.org/_functions/senatorSocialHandles')).json())

    const socialHandles = senatorSocialHandlesList.items.filter((senator) => {
      return senator.last !== 'Last Name'
    })

    return socialHandles.map((senator) => {
      return {
        ...senator,
        avatar: senatorImages.find((record) => {
          return record.firstName.toLocaleLowerCase() === senator.first.toLocaleLowerCase() && record.lastName.toLocaleLowerCase() === senator.last.toLocaleLowerCase()
        })?.img
      }
    })
  }

  return { getSenatorSocialHandles }
}
