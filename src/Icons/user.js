import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={17}
      height={21}
      viewBox="0 0 17 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        clipRule="evenodd"
        d="M8.127 13.781c-3.844 0-7.127.581-7.127 2.91 0 2.327 3.263 2.93 7.127 2.93 3.845 0 7.127-.583 7.127-2.91s-3.262-2.93-7.127-2.93zM8.128 10.461A4.568 4.568 0 103.56 5.893a4.551 4.551 0 004.536 4.568h.03z"
        stroke="#C4C4C4"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgComponent
