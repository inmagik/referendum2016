import React from 'react';
import { connect } from 'react-redux';
import { 
  getFinalDataProvincia, getFinalDataRegione, getFinalDataTotal, getPercentData
} from '../selectors/aggregateData';
import { setDataset } from '../actions';
import  TotalChart  from '../components/TotalChart';

import { Container, Row, Col } from 'reactstrap';

import AggregationSelector from './AggregationSelector';


class Home extends React.Component {

  componentWillMount(){
    let data = require('../data/referendum.json')
    this.props.setDataset(data);
  }

  render() {
    const { data, dataProvincia, dataRegione, dataTotal } = this.props;
    console.info(dataProvincia, dataRegione)

    let style  = { padding : '4px' }

    return (
    <Container>
    <Row>
    <h3>Risultati nazionali</h3>
    <TotalChart className="histogram-chart" data={dataTotal}/>
    </Row>

    <AggregationSelector/>




    <h2>Risultati per provincia</h2>
    <div style={style}>
      <TotalChart className="histogram-chart" data={dataProvincia} dataKey='DESCPROVINCIA'/>
    </div>
    { /*dataProvincia.map(
        (item,idx) =>
        (<div key={idx} style={style}>
          <TotalChart className="histogram-chart" data={[item]} dataKey='DESCPROVINCIA'/>
        </div>)
      )
    */}

    <h2>Risultati per regione</h2>
    <div style={style}>
      <TotalChart className="histogram-chart" data={dataRegione} dataKey='DESCREGIONE'/>
    </div>

    </Container>
    )

    }
}


const mapStateToProps = (state, props) => {
  return {
    data : getPercentData(state),
    dataProvincia : getFinalDataProvincia(state),
    dataRegione : getFinalDataRegione(state),
    dataTotal : getFinalDataTotal(state)
  }
}


export default connect(
  mapStateToProps,
  {setDataset}
)(Home)
