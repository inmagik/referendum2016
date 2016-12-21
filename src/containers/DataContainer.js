import React from 'react';
import { connect } from 'react-redux';

import { setDataset } from '../actions';


class DataContainerComponent extends React.Component {
  constructor(props){
    super(props)
  }

  componentWillMount(){
    let data = require('../data/referendum.json')
    this.props.setDataset(data);
  }

  render(){
    return (
      <div>{this.props.children}</div>
    );
  }
}



export const DataContainer = connect(
  undefined,
  {setDataset}
)(DataContainerComponent)
