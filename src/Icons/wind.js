import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={29}
      height={23}
      viewBox="0 0 29 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M11.45 1.747a2.533 2.533 0 111.786 4.32H1.834m13.417 14.456a2.533 2.533 0 101.786-4.32H1.834M21.763 5.726a3.166 3.166 0 112.242 5.41H1.834"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgComponent
