import { CongressDbRecord } from 'types/CongressDbRecord'
import { CongressBranch } from 'types/CongressBranch'

export const filterByBranch = (congressMembers: CongressDbRecord[]) => (branch: CongressBranch) => {
  return congressMembers.filter((official) => {
    return branch === 'All'
      ? true
      : official.branch === branch
  })
}
