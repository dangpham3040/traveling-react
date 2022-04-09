import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={21}
      height={20}
      viewBox="0 0 21 20"
      fill={props.fill||"none"}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M2.472.75h15.555c.813 0 1.472.66 1.472 1.472v15.555c0 .813-.659 1.472-1.472 1.472H2.472C1.66 19.25 1 18.59 1 17.777V2.222C1 1.41 1.66.75 2.472.75z"
        stroke={props.stroke}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.5 6a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
        stroke={props.stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19 13l-5-5L3 19"
        stroke={props.stroke}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgComponent
