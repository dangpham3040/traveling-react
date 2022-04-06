import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={18}
      height={16}
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M15.814 2.238a4.224 4.224 0 00-5.975 0l-.814.814-.814-.814a4.224 4.224 0 00-5.974 5.974l.814.814L9.025 15 15 9.026l.814-.814a4.225 4.225 0 000-5.974v0z"
        stroke={props.stroke}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgComponent
