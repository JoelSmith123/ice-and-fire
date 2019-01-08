import { App, mapStateToProps, mapDispatchToProps } from './App'
import { fetchHouseData } from '../../thunks/fetchHouseData.js'

describe('App', () => {
  describe('mapStateToProps', () => {
    it('should return data from state', () => {
      const mockState = {
        hasFetchedHouseData: { 
          name: 'House Mickey', 
          founded: '1930',
          coatOfArms: 'Mickey Mouse'
        },
        isLoading: false
      }

      const expected = {
        houseData: { 
          name: 'House Mickey', 
          founded: '1930',
          coatOfArms: 'Mickey Mouse'
        },
        isLoading: false
      }

      const mappedProps = mapStateToProps(mockState)

      expect(mappedProps).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    it('calls dispatch with fetchHouseData() when fetchData is called' , () => {
      const mockDispatch = jest.fn()
      const actionToDispatch = fetchHouseData()

      const mappedProps = mapDispatchToProps(mockDispatch)

      mappedProps.fetchData()

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
})