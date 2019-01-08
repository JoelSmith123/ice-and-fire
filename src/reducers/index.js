import { combineReducers } from 'redux'
import { isLoading, hasErrored, hasFetchedHouseData } from './getHouseData.js'


const rootReducer = combineReducers({
  isLoading,
  hasErrored,
  hasFetchedHouseData
})

export default rootReducer