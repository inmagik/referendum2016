import React, {PropTypes} from 'react';
import { Container, Jumbotron, Row, Col } from 'reactstrap';
import Bars from '../containers/Bars';

export const BarsPage = (props) => {
  return (
    <div>
    <Jumbotron>
       <h1 className="display-3">Referendum 2016</h1>
    </Jumbotron>
    <Bars/>
    </div>
  );
}
