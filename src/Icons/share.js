import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={21}
      height={22}
      viewBox="0 0 21 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M16.5 7a3 3 0 100-6 3 3 0 000 6zM4.5 14a3 3 0 100-6 3 3 0 000 6zM16.5 21a3 3 0 100-6 3 3 0 000 6zM7.09 12.51l6.83 3.98M13.91 5.51L7.09 9.49"
        stroke={props.stroke}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgComponent
