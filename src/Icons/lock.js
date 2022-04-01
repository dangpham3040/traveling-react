import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={19}
      height={23}
      viewBox="0 0 19 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M14.489 8.747V6.368a5.044 5.044 0 00-5.043-5.043 5.042 5.042 0 00-5.064 5.021V8.748"
        stroke="#C4C4C4"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M13.669 21.825H5.202A4.202 4.202 0 011 17.623V12.87a4.202 4.202 0 014.202-4.202h8.467c2.32 0 4.202 1.88 4.202 4.202v4.753a4.202 4.202 0 01-4.202 4.202z"
        stroke="#C4C4C4"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.436 14.017v2.46"
        stroke="#C4C4C4"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgComponent
