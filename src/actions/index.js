export const SET_DATASET = 'SET_DATASET';
export const setDataset = dataset => ({
  type: SET_DATASET,
  payload: dataset
});


export const SET_AGGREGATION = 'SET_AGGREGATION';
export const setAggregation = aggregation => ({
  type : SET_AGGREGATION,
  payload : aggregation
})
