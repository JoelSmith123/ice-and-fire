export const isLoading = (bool) => ({
  type: 'IS_LOADING',
  bool
})

export const hasErrored = (errorMessage) => ({
  type: 'HAS_ERRORED',
  errorMessage
})

export const hasFetchedHouseData = (houseData) => ({
  type: 'HAS_FETCHED_HOUSE_DATA',
  houseData
})