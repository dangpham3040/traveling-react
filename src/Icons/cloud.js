import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={39}
      height={29}
      viewBox="0 0 39 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M22.126 4.953c5.1.14 9.254 4.06 9.762 9.059.035.34.053.686.053 1.034 0 5.577-4.52 10.097-10.097 10.097"
        stroke="#fff"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M31.89 14.012a6.807 6.807 0 01-.71 13.577H7.806a6.807 6.807 0 01-3.293-12.764"
        stroke="#fff"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22.128 4.953c-.094-.002-.189-.004-.283-.004-4.54 0-8.38 2.995-9.65 7.117-.276.892-.43 1.834-.445 2.811a2.414 2.414 0 01-.232.197 6.784 6.784 0 00-3.712-1.1c-.068 0-.136 0-.202.003a6.767 6.767 0 00-3.091.848A5.41 5.41 0 019.51 5.589a6.81 6.81 0 0112.617-.636z"
        stroke="#fff"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgComponent
