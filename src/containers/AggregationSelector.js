import React, {PropTypes} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from 'react-redux';
import { setAggregation} from '../actions'

class AggregationSelector extends React.Component {

  constructor(props){
    super(props)
  }

  handleChange(event) {
    this.props.setAggregation(event.target.value);
  }

  render() {
    return (
      <Row>
      <Col sm="12">
      <Form>
      <FormGroup>
        <Label for="exampleSelect">Livello di aggregazione</Label>
        <Input type="select" name="select" id="exampleSelect" value={this.props.aggregation} onChange={this.handleChange.bind(this)}>
          <option value="REGIONE">Regione</option>
          <option value="PROVINCIA">Provincia</option>
          <option value="COMUNE">Comune</option>
        </Input>
      </FormGroup>
      </Form>
      </Col>

      </Row>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    aggregation : state.aggregation
  }
}

export default connect(
  mapStateToProps,
  {setAggregation}
)(AggregationSelector)
