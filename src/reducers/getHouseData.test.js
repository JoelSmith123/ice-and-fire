import { isLoading, hasErrored, hasFetchedHouseData } from './getHouseData.js'

describe('getHouseData', () => {
  describe('isLoading', () => {
    it('should return the initial state', () => {
      const expected = false

      const result = isLoading(undefined, {})

      expect(result).toEqual(expected)
    })

    it('should return state with isLoading value toggled', () => {
      const expected = true
      const mockAction = {
        type: 'IS_LOADING',
        bool: true
      }

      const result = isLoading(undefined, mockAction)

      expect(result).toEqual(expected)
    })
  })

  describe('hasErrored', () => {
    it('should return the initial state', () => {
      const expected = ''

      const result = hasErrored(undefined, {})

      expect(result).toEqual(expected)
    })

    it('should return state with hasErrored error message', () => {
      const expected = 'Something went wrong'
      const mockAction = {
        type: 'HAS_ERRORED',
        errorMessage: 'Something went wrong'
      }

      const result = hasErrored(undefined, mockAction)

      expect(result).toEqual(expected)
    })
  })

  describe('hasFetchedHouseData', () => {
    it('should return the initial state', () => {
      const expected = []

      const result = hasFetchedHouseData(undefined, {})

      expect(result).toEqual(expected)
    })

    it('should return state with house data', () => {
      const expected = { 
        name: 'House Mickey', 
        founded: '1930',
        coatOfArms: 'Mickey Mouse'
      }
      const mockAction = {
        type: 'HAS_FETCHED_HOUSE_DATA',
        houseData: { 
          name: 'House Mickey', 
          founded: '1930',
          coatOfArms: 'Mickey Mouse'
        }
      }

      const result = hasFetchedHouseData(undefined, mockAction)

      expect(result).toEqual(expected)
    })
  })

})