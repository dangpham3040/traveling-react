import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={8}
      height={6}
      viewBox="0 0 8 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M6.998.281a1 1 0 01.769 1.64L4.902 5.36a1 1 0 01-1.537 0L.5 1.921A1 1 0 011.27.281h5.73z"
        fill="#000"
      />
    </Svg>
  )
}

export default SvgComponent
