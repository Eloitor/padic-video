//import * as console from 'console';
import * as React from 'react';
import {Utils} from "liqvid";
const {constrain, range} = Utils.misc;

import {screenToSVG} from "@lib/svg-utils";

//import {zoom} from "https://cdn.skypack.dev/d3-zoom@3";
import {zoom} from "d3-zoom";

const handler = zoom();

// A react component that renders a padic Open.
class Open extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = { 
      p: props.p,
      r: props.r,
      r_child: props.r * 0.37,
      cx: props.cx,
      cy: props.cy,
      fill: props.fill,
      stroke: props.stroke,
      strokeWidth: props.strokeWidth,
      value: props.value,
      level: props.level,
      childs: [] // this should be numbers
    };
  }

  // If the open is clicked, it creates p new opens in childs
  onClick() {
    let childs = []
    for(let i = 0; i < this.state.p; i++) {
      childs.push(this.state.value + i * this.state.p**(1+this.state.level));
    }
    this.setState({childs: childs});
    }
    
    render() {  
        let value = this.state.value; 
    return (
      <React.Fragment>
          <circle 
            onClick={ () => this.onClick() }
            r={this.props.r} 
            cx={this.props.cx} 
            cy={this.props.cy} 
            fill={this.props.fill} 
            stroke={this.props.stroke} 
            strokeWidth={this.props.strokeWidth}
          />

        {/* Only show the value if the open does not have childs */ }
          <text
            x={this.props.cx}
            y={this.props.cy}
            fontSize={0.8*(0.37 ** (this.props.level)) + "em"}
            fill={"black"}
            //strokeWidth={this.props.strokeWidth}
          >
            { 
              (this.state.childs.length === 0) ?
              value :
              ''
            }
          </text>
        
        { this.draw_childs() }
      )
    )
      
    </React.Fragment>
    );
  }

  draw_childs() {
    return (
      range(this.state.childs.length).map(i => {
        const cx = (this.state.r-this.state.r_child) * Math.cos(2 * Math.PI * i / this.state.p);
        const cy = (this.state.r-this.state.r_child) * Math.sin(2 * Math.PI * i / this.state.p);

        // create open objectOf
        return (
        <Open key={this.state.value + '_' + i}
          p={this.state.p}
          r={this.state.r_child}
          cx={this.state.cx+(this.state.r-this.state.r_child) * Math.cos(2 * Math.PI * i / this.state.p)}
          cy={this.state.cy-(this.state.r-this.state.r_child) * Math.sin(2 * Math.PI * i / this.state.p)}
          fill={"lightgreen"}
          stroke={this.state.stroke}
          strokeWidth={this.state.strokeWidth}
          value={this.state.value + i*this.state.p**(1+this.state.level)}
          level={this.state.level+1}
         // childs={[]}
        />);
      }))
    }

}

export default function Padics(props) {
  const p = 5;
  const r = 50;
  const r_child = r * 0.37;

  //const [digits, setDigits] = React.useState("");

  //const [numbers, updateNumbers] = React.useState([]);
  const [opens, updateOpens] = React.useState(() => range(p) );

  const svg = React.useRef<SVGSVGElement>();
  const zoom = React.useRef(1);

  const onWheel = React.useCallback((e: React.WheelEvent<SVGElement>) => {
    const [x, y] = screenToSVG(svg.current, e.clientX, e.clientY);
    zoom.current = constrain(1, zoom.current - e.deltaY / 200, 20);
    svg.current.setAttribute("viewBox", [
      
        constrain(-50, (-50-x) / zoom.current +x, 50),
        constrain(-50, (-50 -y) / zoom.current +y, 50),
        100 / zoom.current, // width
        100 / zoom.current //height
    ].join(" "));
  }, []);
    
  return (
    <section {...props}>
      <>
      <text x={0} y={0} fontSize={0.5} fill={'black'}>
        Click on the opens to see what's inside them
      </text>
      <svg id="bubble" viewBox="-50 -50 100 100" onWheel={onWheel} ref={svg}>
        <circle cx="0" cy="0" r="50" fill="blue" />
        {opens.map(i => (
          <Open
          key ={i}
          p={p}
          r={r_child}
          cx={(r-r_child) * Math.cos(2 * Math.PI * i / p)}
          cy={-(r-r_child) * Math.sin(2 * Math.PI * i / p)}
          fill={'yellow'}
          stroke={'black'}
          strokeWidth={0.05}
          level={0}
          value={i} // initial values
        />
        )
        )}
      </svg>
      </>
    </section>
  
  );
}

