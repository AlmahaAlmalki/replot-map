import React from "react"
import Coloring from "./coloring.jsx"
import Humanize from "humanize-plus"

class Region extends React.Component {

  constructor(props) {
    super(props)
    this.IDList = []
    for (let area of this.props.paths) {
      this.IDList.push(area[this.props.pathIDKey])
    }
    this.zoomPath = null
    this.state = {
      initialHeight: 0,
      initialWidth: 0,
      currentHeight: 0,
      translateX: 0,
      translateY: 0,
      scale: 1
    }
  }

  componentDidMount() {
    let mapBBox = this.svgMap.getBBox()
    let scale = this.props.width/mapBBox.width
    let currentHeight = mapBBox.height * scale

    if (this.props.zoomScale) {
      scale *= this.props.zoomScale
    }

    let translations = this.getTranslations(this.props.width, currentHeight, scale)
    let translateX = translations[0]
    let translateY = translations[1]

    this.setState({ initialHeight: mapBBox.height, initialWidth: mapBBox.width,
      currentHeight: currentHeight, scale: scale,
      translateX: translateX, translateY: translateY })
  }

  // Prop change - Respond if width, zoomIDKey, or zoomScale changes.
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.width !== this.props.width ||
      prevProps.zoomScale !== this.props.zoomScale ||
      prevProps.zoomIDKey !== this.props.zoomIDKey) {

      let scale = this.props.width/this.state.initialWidth
      let currentHeight = this.state.initialHeight * scale

      if (this.props.zoomScale) {
        scale *= this.props.zoomScale
      }

      let translations = this.getTranslations(this.props.width, currentHeight, scale)
      let translateX = translations[0]
      let translateY = translations[1]

      this.setState({ currentHeight: currentHeight, scale: scale,
        translateX: translateX, translateY: translateY })
    }
  }

  getTranslations(width, height, scale) {
    if (this.props.zoomIDKey && this.zoomPath) {
      // If zoomID is specified, translate the map to center on zoomID.
      let pathBBox = this.zoomPath.getBBox()
      let pathMidX = (pathBBox.x + pathBBox.width / 2) * scale
      let pathMidY = (pathBBox.y + pathBBox.height / 2) * scale
      return [(width / 2) - pathMidX, (height / 2) - pathMidY] //[x, y]
    }
    return [0, 0] //No translations needed.
  }

  getLegend(colors){
    let legend = []

    for (let i = 0; i < 10; i++) {
      legend.push(
        <rect key={"rect" + i} x={i*40} y={8} height={20} width={40} fill={colors.colorGradient[i*10].color}/>
      )
      if (i%2 === 0) {
        let value = parseFloat(colors.colorGradient[i*10].weight.toFixed(2))
        let printValue = this.humanizeValue(value)
        legend.push(
          <text key={"label" + i} x={i*40} y={0} textAnchor="middle">{printValue}</text>
        )
      }
    }
    let value = parseFloat(colors.colorGradient[99].weight.toFixed(2))
    let printValue = this.humanizeValue(value)
    legend.push(
      <text key={"endLabel"} x={400} y={0} textAnchor="middle">{printValue}</text>
    )

    return (
      <g transform="translate(30, 675)">
        {legend}
      </g>
    )
  }

  humanizeValue(value) {
    if (value < 1 && value > -1){
      if (this.props.scale == "lin") {
        return +value.toFixed(3)
      } else if (this.props.scale == "log") {
        return +value.toFixed(5)
      }
    } else if (value < 1000 && value > -1000){
      return +value.toFixed(1)
    } else {
      return Humanize.compactInteger(value, 1)
    }
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
      let ref = this.props.zoomIDKey && id === this.props.zoomIDKey ?
        (node) => this.zoomPath = node : null
      paths.push(
        <path key={id} id={id} title={title} ref={ref} fill={mapColors[id].color}
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
          height={this.state.currentHeight}
        >
          <g transform={`translate(${this.state.translateX},${this.state.translateY}),
            scale(${this.state.scale})`}>
            {paths}
            {legend}
          </g>
        </svg>
      </div>
    )
  }
}

export default Region