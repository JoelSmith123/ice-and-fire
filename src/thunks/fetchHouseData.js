import { isLoading, hasErrored, hasFetchedHouseData } from '../actions'

export const fetchHouseData = () => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch('http://localhost:3001/api/v1/houses')
      if(!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(isLoading(false))
      const data = await response.json()
      await dispatch(hasFetchedHouseData(data))   
    } catch (error) {
      dispatch(hasErrored(error.message))
    } 
  }
}

