export const pickBy = (object: { [key: string]: any }, predicate?: Function) => {
  const obj = {} as { [key: string]: any }

  const predicateFn = predicate || ((arg: object) => arg)

  for (const key in object) {
    if (predicateFn(object[key])) {
      obj[key] = object[key]
    }
  }
  return obj
}
