import React, {PropTypes} from 'react';
import { Container, Jumbotron, Row, Col } from 'reactstrap';
import  Tree  from '../containers/Trees'

export const TreeMapPage = (props) => {
  return (
    <div>
    <Jumbotron>
       <h1 className="display-3">Referendum 2016</h1>
    </Jumbotron>
    <Tree/>

    </div>

  );
}
