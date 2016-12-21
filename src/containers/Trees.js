import React from 'react';
import { connect } from 'react-redux';
import { 
  getTreeData
} from '../selectors/aggregateData';
import { setDataset } from '../actions';
import  TotalChart  from '../components/TotalChart';

import { Container, Row, Col } from 'reactstrap';

import AggregationSelector from './AggregationSelector';
import OrderingSelector from './OrderingSelector';

import { TreeMapChart } from '../components/TreeMapChart';




class Tree extends React.Component {
  constructor(props){
    super(props)
  }



  render() {



    return (
      <TreeMapChart data={this.props.data}/>
    )

    }
}


const mapStateToProps = (state, props) => {
  return {
    data : getTreeData(state)
  }
}


export default connect(
  mapStateToProps,
  {}
)(Tree)
