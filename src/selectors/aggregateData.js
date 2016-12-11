import { createSelector } from 'reselect'
import lodash from 'lodash';

const getData = state => state.data

const aggregateRecordSet = (
  data,
  aggregateKey=null,
  accumulateKeys=[],
  firstFoundKeys = [],
  notFoundKey='OTHERS') => {

  const reducedData = data.reduce((acc, item)=>{
    let key = item[aggregateKey] || notFoundKey;

    if(acc[key]){
      accumulateKeys.forEach(accumulateKey => {
        acc[key][accumulateKey] += item[accumulateKey]
      })
    } else {
      acc[key] = { [aggregateKey] : key  }
      accumulateKeys.forEach(accumulateKey => {
        acc[key][accumulateKey] = item[accumulateKey]
      })
      firstFoundKeys.forEach(k => {
        acc[key][k] = item[k]
      })
    }
    return acc;

  }, {});


  return Object.keys(reducedData).map(key => reducedData[key]);
}


const calculatePercents = data => data.map(item => {
  let tot = item['NUMVOTISI']+item['NUMVOTINO'];
  return {
    ...item,
    totVotes : tot,
    percSi : ((item['NUMVOTISI'] / tot) * 100.0).toFixed(2),
    percNo : ((item['NUMVOTINO'] / tot) * 100.0).toFixed(2),
    percVotanti : ((item['VOTANTI'] / item['ELETTORI']) * 100.0).toFixed(2),
  }
})

const aggregableFields = [
  'NUMVOTISI', 'NUMVOTINO', 'ELETTORI', 'ELETTORI_M', 'VOTANTI', 'VOTANTI_M'
];


export const getPercentData = createSelector(
  [ getData ],
  (data) => calculatePercents(data)
)



export const getAggregateDataProvincia = createSelector(
  [ getData ],
  (data) => aggregateRecordSet(data, 'DESCPROVINCIA', aggregableFields, ['DESCREGIONE'])
)

export const getAggregateDataRegione = createSelector(
  [ getAggregateDataProvincia ],
  (data) => aggregateRecordSet(data, 'DESCREGIONE', aggregableFields)
)

export const getAggregateDataTotal = createSelector(
  [ getAggregateDataRegione ],
  (data) => aggregateRecordSet(data, null, aggregableFields)
)

export const getFinalDataProvincia = createSelector(
  [getAggregateDataProvincia],
  (data) => calculatePercents(data)
)

export const getFinalDataRegione = createSelector(
  [getAggregateDataRegione],
  (data) => calculatePercents(data)
)

export const getFinalDataTotal = createSelector(
  [getAggregateDataTotal],
  (data) => calculatePercents(data)
)
