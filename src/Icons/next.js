import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={6}
      height={10}
      viewBox="0 0 6 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1 9l4-4-4-4"
        stroke="#000"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgComponent
