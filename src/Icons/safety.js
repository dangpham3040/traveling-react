import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={17}
      height={20}
      viewBox="0 0 17 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M8.5 20S17 16 17 10V3L8.5 0 0 3v7c0 6 8.5 10 8.5 10z"
        fill="#FF301B"
      />
      <Path
        d="M13.5 5l-5.125 5L5.5 7.5"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgComponent
