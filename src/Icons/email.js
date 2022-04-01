import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={20}
      height={16}
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M15.136 5.551l-3.95 2.81a2.274 2.274 0 01-2.542 0l-3.983-2.81"
        stroke="#C4C4C4"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M14.252 15c2.704.007 4.526-1.937 4.526-4.326V5.332C18.778 2.944 16.956 1 14.252 1H5.525C2.822 1 1 2.944 1 5.332v5.342C1 13.063 2.822 15.007 5.525 15h8.727z"
        stroke="#C4C4C4"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgComponent
