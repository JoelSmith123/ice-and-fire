import { isLoading, hasErrored, hasFetchedHouseData } from '../actions'

export default const fetchHouseData = () => {
  try {
    dispatch(isLoading(true))
    const response = fetch('http://localhost:3001/api/v1/houses')
    if(!response.ok) {
      dispatch(hasErrored(true))
    }
    const data = response.json()
    dispatch(hasFetchedHouseData(data))    
  } catch {
    dispatch(hasErrored(true))
  }
}