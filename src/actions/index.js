export const isLoading = (bool) => ({
  type: 'IS_LOADING',
  bool
})

export const hasErrored = (bool) => ({
  type: 'HAS_ERRORED',
  bool
})

export const hasFetchedHouseData = (houseData) => ({
  type: 'HAS_FETCHED_HOUSE_DATA',
  houseData
})