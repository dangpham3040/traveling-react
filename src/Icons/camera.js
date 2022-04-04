import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={16} cy={16} r={16} fill="#FF301B" />
      <Path
        d="M24.111 21.444A1.556 1.556 0 0122.556 23h-14A1.556 1.556 0 017 21.444V12.89a1.556 1.556 0 011.556-1.556h3.11L13.223 9h4.667l1.555 2.333h3.112a1.556 1.556 0 011.555 1.556v8.555z"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.555 19.889a3.111 3.111 0 100-6.223 3.111 3.111 0 000 6.223z"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgComponent
