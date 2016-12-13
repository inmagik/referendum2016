import React, {PropTypes} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class AggregationSelector extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row>
      <Col sm="12">
      <Form>
      <FormGroup>
        <Label for="exampleSelect">Livello di aggregazione</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>Regione</option>
          <option>Provincia</option>
          <option>Comune</option>
        </Input>
      </FormGroup>
      </Form>
      </Col>

      </Row>

    );
  }
}