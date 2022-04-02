import * as React from "react"
import Svg, { Circle } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={5}
      height={5}
      viewBox="0 0 5 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={2.4} cy={2.4} r={2.4} fill="#FF301B" />
    </Svg>
  )
}

export default SvgComponent
