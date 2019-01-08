export const isLoading = (state = false, action) => {
  switch (action.type) {
    case 'IS_LOADING': 
      return action.bool
    default:
      return state
  }
}

export const hasErrored = (state = '', action) => {
  switch (action.type) {
    case 'HAS_ERRORED': 
      return action.errorMessage
    default: 
      return state
  }
}

export const hasFetchedHouseData = (state = [], action) => {
  switch (action.type) {
    case 'HAS_FETCHED_HOUSE_DATA':
      return action.houseData
    default: 
      return state
  }
}