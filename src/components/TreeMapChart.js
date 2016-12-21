import React from 'react';
import { Treemap } from 'recharts';
import { Container, Row, Col } from 'reactstrap';

const COLORS = ['#8889DD', '#9597E4', '#8DC77B', '#A5D297', '#E2CF45', '#F8C12D'];

const CustomizedContent = React.createClass({
  render() {
    const { root, depth, x, y, width, height, index, payload, colors, rank, name } = this.props;

    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          style={{
            fill: depth < 2 ? colors[Math.floor(index / root.children.length * 6)] : 'none',
            stroke: '#fff',
            strokeWidth: 2 / (depth + 1e-10),
            strokeOpacity: 1 / (depth + 1e-10),
          }}
        />
        {
          <text
            x={x + width / 2}
            y={y + height / 2 + 7}
            textAnchor="middle"
            fill={depth==1?'#000': '#fff'}
            fontSize={20/depth}
          >
            {name}
          </text>

        }

      </g>
    );
  }
});


export  class TreeMapChart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data, dataKey } = this.props;
    const animationActive = this.props.animationActive !== undefined ?
      this.props.animationActive : false;

    return (
    <div>
      <Treemap
      	width={800}
        height={400}
        data={data}
        dataKey="value"
        stroke="#fff"
        fill="#8884d8"
        content={<CustomizedContent colors={COLORS}/>}
      />
    </div>

    );
  }
}
