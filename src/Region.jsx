import React from "react"
import Coloring from "./coloring.jsx"

class Region extends React.Component {

  constructor(props) {
    super(props)
    this.IDList = []
    for (let area of this.props.paths) {
      this.IDList.push(area[this.props.pathIDKey])
    }
    this.state = {
      height: 0,
      scale: 1
    }
  }

  componentDidMount() {
    let bbox = this.svgMap.getBBox();
    let height = bbox.height;
    let scale = this.props.width/bbox.width;
    this.setState({ height : height, scale: scale });
  }

  getLegend(colors){
    let legend = []

    for (let i = 0; i < 10; i++) {
      legend.push(
        <rect key={"rect" + i} x={i*40} y={8} height={20} width={40} fill={colors.colorGradient[i*10].color}/>
      )
      if (i%2 === 0) {
        legend.push(
          <text key={"label" + i} x={i*40} y={0} textAnchor="middle">{parseFloat(colors.colorGradient[i*10].weight.toFixed(2))}</text>
        )
      }
    }
    legend.push(
      <text key={"endLabel"} x={400} y={0} textAnchor="middle">{parseFloat(colors.colorGradient[99].weight.toFixed(2))}</text>
    )

    return (
      <g transform="translate(30, 675)">
        {legend}
      </g>
    )
  }

  render () {
    let colors = new Coloring(this.IDList, this.props.IDKey, this.props.weightKey, this.props.scale, this.props.data, this.props.colorKey, this.props.colorRange, this.props.colorCatgories)
    let mapColors = colors.generate()
    let legend = this.getLegend(colors)

    let paths = []
    for (let i = 0; i < this.props.paths.length; i++) {
      let area = this.props.paths[i]
      let id = area[this.props.pathIDKey]
      let title = area[this.props.pathTitleKey]
      paths.push(
        <path key={id} id={id} title={title} fill={mapColors[id].color}
          onMouseOver={this.props.activateTooltip.bind(this, mapColors[id].raw, title)}
          onMouseOut={this.props.deactivateTooltip.bind(this)}
          d={area.d} />
      )
    }

    return(
      <div>
        <svg
          ref={(node) => this.svgMap = node}
          width={this.props.width}
          height={this.state.height * this.state.scale}
        >
          <g transform={`scale(${this.state.scale})`}>
            {paths}
            {legend}
          </g>
        </svg>
      </div>
    )
  }
}

export default Region
