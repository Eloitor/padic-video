import * as React from 'react';

// <Open setDigits={setDigits}> 
//this.props.setDigits(prev => String(i) + prev)


// A react component that renders a padic Open.
class Open extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = { 
            p: props.p,
            r: props.r, //https://github.com/pmndrs/zustand/
            r_child: props.r * 0.37,
            cx: props.cx,
            cy: props.cy,
            fill: props.fill,
            stroke: props.stroke,
            strokeWidth: props.strokeWidth,
            value: props.value,
            level: props.level,
            childs: []
        };
    }

    // If the open is clicked, it creates p new opens in childs
    onClick() {
      let childs = []
      for(let i = 0; i < this.state.p; i++) {
        const cx = (this.state.r-this.state.r_child) * Math.cos(2 * Math.PI * i / this.state.p);
        const cy = (this.state.r-this.state.r_child) * Math.sin(2 * Math.PI * i / this.state.p);
        childs.push(
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
            childs={this.state.childs}
          />
        )
      }
      this.setState({ 
        childs: childs,
      });

    }
    
    render() {  
        let value = this.state.value; 
        let is_open = this.state.is_open; 
    return (
      <React.Fragment>
          <circle 
            onClick={(e) => { this.onClick() }}
            r={this.props.r} 
            cx={this.props.cx} 
            cy={this.props.cy} 
            fill={this.props.fill} 
            stroke={this.props.stroke} 
            strokeWidth={this.props.strokeWidth}
          />
        
            <text
            x={this.props.cx}
            y={this.props.cy}
            // Two over the length of value as a string
            fontSize={0.8*(0.37 ** (this.props.level)) + "em"}
            fill={"black"}
            //strokeWidth={this.props.strokeWidth}
          >
            { /* Only show the value if the open does not have childs */ 
              (this.state.childs.length === 0) ?
              value :
              ''
            }
          </text>
        
          {this.state.childs}
      </React.Fragment>
    );
  }
}


export default class Padics extends React.Component<any, any> {
    constructor(props) {
        super(props);
        const p = 5;
        const r = 50;
        const r_child = r * 0.37;

        this.state = {
          numbers : [], // the numbers that we wish to represent as padic aproximations
          opens : [], // The opens inside this open
        };

        for(let i = 0; i < p; i++) {
          this.state.opens.push(
            <Open
              key ={i}
              p={p}
              r={r_child}
              cx={(r-r_child) * Math.cos(2 * Math.PI * i / p)}
              cy={-(r-r_child) * Math.sin(2 * Math.PI * i / p)}
              fill={'yellow'}
              stroke={'black'}
              strokeWidth={0.5}
              level={0}
              value={i} // initial values
            />
          );
        }
            
    }

    render() {
        return (
          
          
          <section {...this.props}>
            <text x={0} y={0} fontSize={0.5} fill={'black'}>
              Click on the opens to see what's inside them
            </text>
            <svg id="bubble" viewBox="-50 -50 100 100">
                <circle cx="0" cy="0" r="50" fill="blue"/>
                {this.state.opens}
            </svg>
          </section>
        );
    }
  }

