import * as React from "react"
import Svg, { Circle } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={6}
      height={5}
      viewBox="0 0 6 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={2.99961} cy={2.4} r={2.4} fill="#fff" />
    </Svg>
  )
}

export default SvgComponent
