import { pickBy } from 'util/pickBy'

interface PickByTestObject {
  foo: string
  baz: undefined
  bat: null
  bing: boolean
}

describe('pickBy', () => {
  describe('when passed a single object argument', () => {
    const object: PickByTestObject = { foo: 'bar', baz: undefined, bat: null, bing: false }

    it('removes keys with falsy values', () => {
      expect(pickBy(object)).toEqual({ foo: 'bar' })
    })
  })

  describe('when passed a predicate fn as the second argument', () => {
    const object: PickByTestObject = { foo: 'bar', baz: undefined, bat: null, bing: false }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const predicate = (arg: any) => typeof arg === 'string'

    it('removes keys with values that evaluate to false when passed into the predicate', () => {
      expect(pickBy(object, predicate)).toEqual({ foo: 'bar' })
    })
  })
})
