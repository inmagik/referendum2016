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
      <Col  sm="12">
      <Form>
      <FormGroup>
        <Label for="exampleSelect">Ordinamento</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>Numero Votanti</option>
          <option>Numero Voti SI</option>
          <option>Numero Voti NO</option>
          <option>Percentuale Votanti</option>
          <option>Percentuale Voti SI</option>
          <option>Percentuale Voti NO</option>
        </Input>
      </FormGroup>
      </Form>
      </Col>
      </Row>

    );
  }
}
