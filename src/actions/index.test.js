import * as actions from './index.js'

describe('actions', () => {
  it('should have a type of IS_LOADING', () => {
    const bool = true
    const mockAction = {
      type: 'IS_LOADING',
      bool: true
    }

    const result = actions.isLoading(true)

    expect(result).toEqual(mockAction)
  })

  it('should have a type of HAS_ERRORED', () => {
    const errorMessage = 'Something went wrong'
    const mockAction = {
      type: 'HAS_ERRORED',
      errorMessage: 'Something went wrong'
    }

    const result = actions.hasErrored('Something went wrong')

    expect(result).toEqual(mockAction)
  })

  it('should have a type of HAS_FETCHED_HOUSE_DATA', () => {
    const houseData = { 
      name: 'House Mickey', 
      founded: '1930',
      coatOfArms: 'Mickey Mouse'
    }
    const mockAction = {
      type: 'HAS_FETCHED_HOUSE_DATA',
      houseData
    }

    const result = actions.hasFetchedHouseData(houseData)

    expect(result).toEqual(mockAction)
  })

})