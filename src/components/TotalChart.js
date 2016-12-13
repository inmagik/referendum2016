import React from 'react';
import  {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  RadialBarChart, RadialBar,Legend, ComposedChart} from 'recharts';

import { Container, Row, Col } from 'reactstrap';


export default class TotalChart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data, dataKey } = this.props;
    const animationActive = this.props.animationActive !== undefined ?
      this.props.animationActive : false;
    return (
    <div>
    <Row>

      <Col sm="6">
      <BarChart layout='vertical'
            width={600} height={data.length*90+50} data={data}
            barSize={20}
            barCategoryGap={20}
            margin={{top: 5, right: 5, left: 100, bottom: 5}}>
       <YAxis type="category" dataKey={dataKey} />
       <XAxis type="number" domain={[0, 100]}/>
       <Tooltip/>
       {/**<Legend />*/}
       <Bar isAnimationActive={animationActive} dataKey="percVotanti" fill="RoyalBlue" barSize={4} label/>
       <Bar isAnimationActive={animationActive} dataKey="percSi" fill="teal" label/>
       <Bar isAnimationActive={animationActive} dataKey="percNo" fill="crimson" label />


       <CartesianGrid strokeDasharray="3 3"/>
      </BarChart>
      </Col>

      <Col sm="6">
      <BarChart layout='vertical'
            width={600} height={data.length*90+50} data={data}
            barSize={20}
            barCategoryGap={20}
            margin={{top: 5, right: 5, left: 0, bottom: 5}}>
       <YAxis type="category" dataKey={dataKey} tick={false}/>
       <XAxis type="number" domain={[0, 'auto']}/>
       <Tooltip/>
       {/**<Legend />*/}
       <Bar isAnimationActive={animationActive}  dataKey="VOTANTI" fill="RoyalBlue" barSize={4} label/>
       <Bar isAnimationActive={animationActive}  dataKey="NUMVOTISI" fill="teal" label/>
       <Bar isAnimationActive={animationActive}  dataKey="NUMVOTINO" fill="crimson" label />

       <CartesianGrid strokeDasharray="3 3"/>
      </BarChart>
      </Col>

      {/*



      <Col sm="6">
      <BarChart
            layout='vertical'
            width={600} height={data.length*40+40} data={data}
            barSize={20}
            margin={{top: 5, right: 5, left: 100, bottom: 5}}>
       <YAxis type="category" dataKey={dataKey} />
       <XAxis type="number" domain={[0, 100]}/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
        <Bar dataKey="percVotanti" fill="RoyalBlue" />
      </BarChart>
      </Col>
      */}
    </Row>
    </div>

    );
  }
}
